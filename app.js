// app.js (modified) - adds UI validation improvements and CSS-friendly structure
// NOTE: This file is intended to replace/patch your existing app.js where the earlier localStorage logic existed.

(function() {
  window.allRecords = window.allRecords || [];
  window.filteredRecords = window.filteredRecords || [];
  let editingId = null;

  // ---------- Storage helpers ----------
  function loadRecordsFromStorage() {
    const raw = localStorage.getItem('iqc_records');
    try {
      window.allRecords = raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Failed parsing iqc_records', e);
      window.allRecords = [];
    }
    window.filteredRecords = [...window.allRecords];
    renderTableBody();
  }
  function saveRecordsToStorage() {
    localStorage.setItem('iqc_records', JSON.stringify(window.allRecords || []));
  }

  // RTV groups helpers
  function getRTVGroups() {
    const raw = localStorage.getItem('rtv_groups');
    try { return raw ? JSON.parse(raw) : []; } catch(e){ return []; }
  }
  function saveRTVGroups(groups) { localStorage.setItem('rtv_groups', JSON.stringify(groups || [])); }
  function createRTVGroup(name, snList, trackingNumber) {
    const groups = getRTVGroups();
    const id = 'rtvgroup-' + Date.now();
    const group = { id, name: name || id, sn_list: snList || [], tracking_number: trackingNumber || '', created_by: (window.currentUser || 'unknown'), created_at: new Date().toISOString() };
    groups.push(group);
    saveRTVGroups(groups);
    return group;
  }

  // ---------- Parts UI ----------
  function addPartRow(part = {}) {
    const container = document.getElementById('parts-list');
    const row = document.createElement('div');
    row.className = 'part-row';
    row.innerHTML = `
      <input placeholder="Part No" class="part-no input" style="width:40%;" value="${escapeHtml(part.part_no || '')}" />
      <input type="number" min="1" value="${part.qty || 1}" class="part-qty input" style="width:20%;" />
      <input placeholder="備註" class="part-remark input" style="width:35%;" value="${escapeHtml(part.remark || '')}" />
      <button type="button" class="remove-part btn" style="width:6%;">✕</button>
      <div class="part-error" style="color:var(--danger); font-size:12px; margin-left:8px; display:none;"></div>
    `;
    container.appendChild(row);
    const removeBtn = row.querySelector('.remove-part');
    removeBtn.addEventListener('click', () => row.remove());
    // live validation: remove invalid on input
    row.querySelectorAll('.input').forEach(inp => inp.addEventListener('input', () => {
      inp.classList.remove('invalid');
      const err = row.querySelector('.part-error'); if (err) err.style.display = 'none';
    }));
    return row;
  }

  function readPartsFromForm() {
    const parts = [];
    document.querySelectorAll('#parts-list .part-row').forEach(row => {
      const part_no = row.querySelector('.part-no').value.trim();
      const qty = parseInt(row.querySelector('.part-qty').value, 10) || 0;
      const remark = row.querySelector('.part-remark').value.trim();
      if (part_no) parts.push({ part_no, qty, remark });
    });
    return parts;
  }

  function renderPartsToForm(parts = []) {
    const container = document.getElementById('parts-list');
    container.innerHTML = '';
    (parts || []).forEach(p => addPartRow(p));
  }

  // ---------- Fail note UI toggle ----------
  function initFailNoteToggle() {
    const resultSelect = document.getElementById('result-select');
    const failSection = document.getElementById('fail-info-section');
    if (!resultSelect || !failSection) return;
    function update() { failSection.style.display = (resultSelect.value === 'Fail') ? 'block' : 'none'; }
    resultSelect.addEventListener('change', update);
    update();
  }

  // ---------- Validation ----------
  function showFieldError(fieldEl, message) {
    if (!fieldEl) return;
    fieldEl.classList.add('invalid');
    const errEl = document.getElementById('error-' + fieldEl.id);
    if (errEl) { errEl.textContent = message; errEl.classList.add('show'); }
  }
  function clearFieldError(fieldEl) {
    if (!fieldEl) return;
    fieldEl.classList.remove('invalid');
    const errEl = document.getElementById('error-' + fieldEl.id);
    if (errEl) { errEl.textContent = ''; errEl.classList.remove('show'); }
  }

  function validateForm() {
    // clear previous
    ['qpn','sn','dept','fail-note','requester','verifier'].forEach(id => {
      const el = document.getElementById(id);
      if (el) clearFieldError(el);
    });
    document.getElementById('error-parts').textContent = '';

    const qpnEl = document.getElementById('qpn');
    const snEl = document.getElementById('sn');
    const deptEl = document.getElementById('dept');

    let valid = true;
    if (!qpnEl || !qpnEl.value.trim()) { showFieldError(qpnEl, 'QPN 為必填'); valid = false; }
    if (!snEl || !snEl.value.trim()) { showFieldError(snEl, 'SN 為必填'); valid = false; }
    if (!deptEl || !deptEl.value) { showFieldError(deptEl, '請選擇部門'); valid = false; }

    // Parts validation: if there are part rows, require part_no (non-empty) and qty >=1
    const partRows = document.querySelectorAll('#parts-list .part-row');
    for (let i = 0; i < partRows.length; i++) {
      const row = partRows[i];
      const partNoEl = row.querySelector('.part-no');
      const qtyEl = row.querySelector('.part-qty');
      const errEl = row.querySelector('.part-error');
      if (partNoEl && partNoEl.value.trim() === '') {
        partNoEl.classList.add('invalid');
        if (errEl) { errEl.style.display = 'block'; errEl.textContent = 'Part No 必填或刪除此列'; }
        document.getElementById('error-parts').textContent = '請修正 Parts 的內容或刪除空白列';
        valid = false;
      }
      const qty = parseInt(qtyEl.value, 10) || 0;
      if (qty <= 0) {
        qtyEl.classList.add('invalid');
        if (errEl) { errEl.style.display = 'block'; errEl.textContent = 'Qty 必須 >= 1'; }
        document.getElementById('error-parts').textContent = '請修正 Parts 的數量';
        valid = false;
      }
    }

    return valid;
  }

  // ---------- Save / Update record ----------
  async function handleSaveRecord() {
    if (!validateForm()) {
      // focus first invalid element
      const firstInvalid = document.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const qpn = document.getElementById('qpn').value.trim();
    const sn = document.getElementById('sn').value.trim();
    const dept = document.getElementById('dept').value;
    const requester = document.getElementById('requester').value.trim();
    const verifier = document.getElementById('verifier').value.trim();
    const result = document.getElementById('result-select').value;
    const fail_note = document.getElementById('fail-note').value.trim();
    const parts = readPartsFromForm();

    const now = new Date().toISOString();

    if (editingId !== null) {
      const idx = window.allRecords.findIndex(r => r.id === editingId);
      if (idx === -1) { alert('找不到要更新的紀錄'); return; }
      const rec = window.allRecords[idx];
      rec.qpn = qpn; rec.sn = sn; rec.dept = dept; rec.requester = requester; rec.verifier = verifier;
      rec.result = result; rec.fail_note = fail_note || ''; rec.parts = parts; rec.updated_at = now;
      window.allRecords[idx] = rec;
    } else {
      const newId = (window.allRecords.length ? (Math.max(...window.allRecords.map(r => Number(r.id || 0))) + 1) : 1);
      const newRecord = {
        id: newId,
        qpn, sn, dept, requester, verifier,
        result,
        fail_note: fail_note || '',
        parts: parts,
        is_rtv: 'No',
        timestamp: now,
        rtv_data: { stage_completion: {}, completion_dates: {}, tracking_number: '' }
      };
      window.allRecords.unshift(newRecord);
    }

    saveRecordsToStorage();
    loadRecordsFromStorage();
    resetForm();
    alert('儲存完成');
  }

  // ---------- Reset ----------
  function resetForm() {
    const form = document.getElementById('retest-form');
    if (form) form.reset();
    renderPartsToForm([]);
    editingId = null;
    // clear errors
    ['qpn','sn','dept','fail-note','requester','verifier'].forEach(id => {
      const el = document.getElementById(id); if (el) clearFieldError(el);
    });
    document.getElementById('error-parts').textContent = '';
    initFailNoteToggle();
  }

  // ---------- Table rendering ----------
  function renderTableBody() {
    const container = document.getElementById('records-table');
    if (!container) return;
    container.innerHTML = '';
    const table = document.createElement('table');
    table.style.width = '100%';
    const thead = document.createElement('thead');
    thead.innerHTML = `<tr>
      <th></th><th>ID</th><th>QPN</th><th>SN</th><th>Result</th><th>Parts</th><th>Fail Note</th><th>Actions</th>
    </tr>`;
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    (window.filteredRecords || []).forEach(rec => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><input type="checkbox" class="select-record" data-id="${rec.id}"></td>
        <td>${rec.id}</td>
        <td>${escapeHtml(rec.qpn || '')}</td>
        <td>${escapeHtml(rec.sn || '')}</td>
        <td>${escapeHtml(rec.result || '')}</td>
        <td>${(rec.parts && rec.parts.length) ? rec.parts.length : ''}</td>
        <td>${rec.fail_note ? escapeHtml(truncate(rec.fail_note, 60)) : ''}</td>
        <td>
          <button class="edit-record btn" data-id="${rec.id}">編輯</button>
          <button class="view-rtv btn" data-id="${rec.id}">RTV</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    container.appendChild(table);

    // wire handlers
    document.querySelectorAll('.edit-record').forEach(btn => btn.addEventListener('click', (e) => {
      const id = Number(e.currentTarget.dataset.id);
      startEditRecord(id);
    }));
    const createGroupBtn = document.getElementById('create-rtv-group-from-selection');
    document.querySelectorAll('.select-record').forEach(chk => {
      chk.addEventListener('change', () => {
        const selected = getSelectedRecordIds();
        createGroupBtn.disabled = selected.length < 2;
      });
    });
  }

  function getSelectedRecordIds() {
    const ids = [];
    document.querySelectorAll('.select-record:checked').forEach(cb => ids.push(Number(cb.dataset.id)));
    return ids;
  }

  function startEditRecord(id) {
    const rec = window.allRecords.find(r => r.id === id);
    if (!rec) return alert('找不到紀錄');
    editingId = rec.id;
    if (document.getElementById('qpn')) document.getElementById('qpn').value = rec.qpn || '';
    if (document.getElementById('sn')) document.getElementById('sn').value = rec.sn || '';
    if (document.getElementById('dept')) document.getElementById('dept').value = rec.dept || '';
    if (document.getElementById('requester')) document.getElementById('requester').value = rec.requester || '';
    if (document.getElementById('verifier')) document.getElementById('verifier').value = rec.verifier || '';
    if (document.getElementById('result-select')) document.getElementById('result-select').value = rec.result || 'Pass';
    if (document.getElementById('fail-note')) document.getElementById('fail-note').value = rec.fail_note || '';
    renderPartsToForm(rec.parts || []);
    initFailNoteToggle();
  }

  // Create RTV group from selection
  function handleCreateGroupFromSelection() {
    const selectedIds = getSelectedRecordIds();
    if (selectedIds.length < 2) return alert('請選取至少兩筆紀錄以建立 RTV 群組');
    const snList = window.allRecords.filter(r => selectedIds.includes(r.id)).map(r => r.sn);
    const name = prompt('請輸入 RTV 群組名稱（可空）', 'RTV Group');
    const tracking = prompt('輸入 tracking number（可空）', '');
    const group = createRTVGroup(name, snList, tracking);
    alert('已建立 RTV 群組: ' + group.id);
    // optionally redirect to rtv-detail page with group id
    // window.location.href = `rtv-detail.html?group=${group.id}`;
  }

  // ---------- Utilities ----------
  function escapeHtml(str) {
    return String(str || '').replace(/[&<>\"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'})[m]; });
  }
  function truncate(str, n) { return str.length > n ? str.substr(0,n) + '…' : str; }

  // ---------- Initialization ----------
  document.addEventListener('DOMContentLoaded', () => {
    initFailNoteToggle();
    document.getElementById('add-part-btn').addEventListener('click', () => addPartRow());
    document.getElementById('save-btn').addEventListener('click', handleSaveRecord);
    document.getElementById('reset-btn').addEventListener('click', resetForm);
    document.getElementById('create-rtv-group-from-selection').addEventListener('click', handleCreateGroupFromSelection);

    // live clear for basic fields
    ['qpn','sn','dept'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', () => clearFieldError(el));
    });

    loadRecordsFromStorage();
  });

  // expose for debug
  window.createRTVGroup = createRTVGroup;
  window.getRTVGroups = getRTVGroups;
  window.getSelectedRecordIds = getSelectedRecordIds;
  window.loadRecordsFromStorage = loadRecordsFromStorage;

})();
