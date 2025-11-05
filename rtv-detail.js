// rtv-detail.js (modified) - add support for viewing/operating on RTV groups (localStorage implementation)

// Helper to parse query params
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Load single record by id
function loadRecordById(id) {
  const raw = localStorage.getItem('iqc_records');
  const arr = raw ? JSON.parse(raw) : [];
  return arr.find(r => String(r.id) === String(id));
}

// RTV groups helpers (mirror app.js)
function getRTVGroups() {
  try {
    const raw = localStorage.getItem('rtv_groups');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
}
function getRTVGroupById(id) {
  const groups = getRTVGroups();
  return groups.find(g => g.id === id);
}

// Render function for group view
function renderGroupDetail(group) {
  const container = document.getElementById('group-detail');
  if (!container) return;
  container.innerHTML = `
    <h3>RTV 群組：${group.name} (${group.id})</h3>
    <p>Tracking #: ${group.tracking_number || '-'}</p>
    <p>Created by: ${group.created_by} at ${new Date(group.created_at).toLocaleString()}</p>
    <div id="group-sn-list"></div>
  `;
  const snListDiv = document.getElementById('group-sn-list');
  snListDiv.innerHTML = '';
  (group.sn_list || []).forEach(sn => {
    const rec = findRecordBySN(sn);
    const el = document.createElement('div');
    el.className = 'group-sn-row';
    el.style = 'padding:8px; border-bottom:1px solid #eee;';
    el.innerHTML = `
      <strong>SN:</strong> ${sn} 
      ${rec ? 
      `<span style="margin-left:12px;">Result:${rec.result || ''}</span>` : '<em>（找不到 Record）</em>'}
      <div style="margin-top:6px;">Parts: ${rec && rec.parts ? (rec.parts.length) : 0} | Fail Note: ${rec && rec.fail_note ? rec.fail_note : '-'}</div>
      <div style="margin-top:6px;">
        <button class="btn complete-stage-btn" data-sn="${sn}" data-stage="1">完成 Stage 1</button>
        <button class="btn complete-stage-btn" data-sn="${sn}" data-stage="2">完成 Stage 2</button>
      </div>
    `;
    snListDiv.appendChild(el);
  });

  // wire up complete stage handlers for group (example: operate per SN)
  document.querySelectorAll('.complete-stage-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const sn = e.currentTarget.dataset.sn;
      const stage = e.currentTarget.dataset.stage;
      completeStageForSN(sn, stage);
    });
  });
}

// helper: find record by SN
function findRecordBySN(sn) {
  const raw = localStorage.getItem('iqc_records');
  const arr = raw ? JSON.parse(raw) : [];
  return arr.find(r => r.sn === sn);
}

// complete stage for a single SN in localStorage (simple example)
function completeStageForSN(sn, stage) {
  const raw = localStorage.getItem('iqc_records');
  const arr = raw ? JSON.parse(raw) : [];
  const idx = arr.findIndex(r => r.sn === sn);
  if (idx === -1) { alert('找不到 SN: ' + sn); return; }
  const now = new Date().toISOString();
  const key = 'stage' + stage;
  arr[idx].rtv_data = arr[idx].rtv_data || { stage_completion: {}, completion_dates: {}, tracking_number: ''};
  arr[idx].rtv_data.stage_completion[key] = true;
  arr[idx].rtv_data.completion_dates[key] = now;
  localStorage.setItem('iqc_records', JSON.stringify(arr));
  alert(`SN ${sn} 的 stage ${stage} 已標記完成`);
  // optionally re-render group detail
  const groupId = getQueryParam('group');
  if (groupId) {
    const g = getRTVGroupById(groupId);
    if (g) renderGroupDetail(g);
  }
}

// Page init
document.addEventListener('DOMContentLoaded', () => {
  const groupId = getQueryParam('group'); // rtv-detail.html?group=rtvgroup-xxx
  const recordId = getQueryParam('id');   // rtv-detail.html?id=123

  if (groupId) {
    const group = getRTVGroupById(groupId);
    if (!group) {
      document.getElementById('group-detail').innerText = '找不到 group';
      return;
    }
    renderGroupDetail(group);
  } else if (recordId) {
    const rec = loadRecordById(recordId);
    if (!rec) {
      document.getElementById('group-detail').innerText = '找不到 record';
      return;
    }
    // render single record basic info
    document.getElementById('group-detail').innerHTML = `
      <h3>SN: ${rec.sn}</h3>
      <div>Result: ${rec.result || ''}</div>
      <div>Fail Note: ${rec.fail_note || '-'}</div>
      <div>Parts: ${(rec.parts && rec.parts.length) || 0}</div>
    `;
  } else {
    // nothing specified: show groups list
    const groups = getRTVGroups();
    const container = document.getElementById('group-detail');
    if (!container) return;
    container.innerHTML = '<h3>RTV Groups</h3>';
    if (!groups.length) {
      container.innerHTML += '<div>目前沒有 RTV 群組</div>';
    } else {
      groups.forEach(g => {
        const el = document.createElement('div');
        el.style = 'padding:8px; border-bottom:1px dashed #ddd;';
        el.innerHTML = `<strong>${g.name}</strong> (${g.id}) - SNs: ${g.sn_list.length || 0} - <a href="rtv-detail.html?group=${g.id}">檢視</a>`;
        container.appendChild(el);
      });
    }
  }
});
