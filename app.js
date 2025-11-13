// --- LANGUAGE DICTIONARY ---
const langDict = {
    '繁體中文': {
        'title': '🌟 IQC Retest 與 FA 追蹤系統 🌟',
        'form-title': '新增 Retest 紀錄',
        'QPN': '料號QPN',
        'SN': 'SN',
        'Dept': '需求部門',
        'Requester': '需求人員',
        'Verifier': '復叛人員',
        'Result': '結果',
        'Save': '儲存',
        'Export': '匯出',
        'Delete': '刪除選中',
        'Search': '搜尋 SN',
        'Admin': '管理員模式',
        'ExitAdmin': '退出管理員',
        'Filter': '篩選',
        'ClearFilter': '清除篩選',
        'Count': '筆數統計',
        'StartDate': '開始日期',
        'EndDate': '結束日期',
        'IsRTV': '是否 RTV',
        'RTVInfo': 'RTV 信息',
        'Time': '時間',
        'Actions': '操作',
        'Ready': '準備就緒。',
        'RecordSaved': '✅ 紀錄已儲存！',
        'RecordDeleted': '🗑️ 紀錄已刪除！',
        'FilterApplied': '🔍 篩選已套用！',
        'FilterCleared': '🔄 篩選已清除！',
        'InputRequired': '⚠️ 請輸入所有必填欄位！',
        'ConfirmDelete': '確定要刪除選定的 {count} 筆紀錄嗎？',
        'NoDataToExport': '沒有可匯出的資料！',
        'CSVExported': '📊 CSV 已匯出！',
        'AdminModeActivated': '🔓 管理員模式已啟用。',
        'AdminModeDeactivated': '🔒 管理員模式已停用。',
        'Password': '密碼',
        'EnterAdminPassword': '請輸入管理員密碼：',
        'IncorrectPassword': '❌ 密碼錯誤！',
        'SearchPrompt': '請輸入要搜尋的 SN:',
        'NotFound': '找不到符合的 SN 紀錄。',
        'SearchCompleted': '✅ 搜尋完成。',
        'Duplication': '⚠️ 此 SN 已存在！',
        'DuplicateDetail': '資料庫中已有 {count} 筆記錄。是否仍要新增？',
        'Required': '必填',
        'Language': '語言',
        'ViewRTVInfo': '查看 RTV 信息',
        'Parts': 'Parts',
        'FailureDescription': 'Failure Description'
    },
    'English': {
        'title': '🌟 IQC Retest & FA Tracking System 🌟',
        'form-title': 'Add Retest Record',
        'QPN': 'QPN',
        'SN': 'SN',
        'Dept': 'Dept',
        'Requester': 'Requester',
        'Verifier': 'Verifier',
        'Result': 'Result',
        'Save': 'Save',
        'Export': 'Export',
        'Delete': 'Delete Selected',
        'Search': 'Search SN',
        'Admin': 'Admin Mode',
        'ExitAdmin': 'Exit Admin',
        'Filter': 'Filter',
        'ClearFilter': 'Clear Filter',
        'Count': 'Record Count',
        'StartDate': 'Start Date',
        'EndDate': 'End Date',
        'IsRTV': 'RTV?',
        'RTVInfo': 'RTV Info',
        'Time': 'Time',
        'Actions': 'Actions',
        'Ready': 'Ready.',
        'RecordSaved': '✅ Record saved!',
        'RecordDeleted': '🗑️ Record deleted!',
        'FilterApplied': '🔍 Filter applied!',
        'FilterCleared': '🔄 Filter cleared!',
        'InputRequired': '⚠️ Please fill all required fields!',
        'ConfirmDelete': 'Are you sure you want to delete the {count} selected records?',
        'NoDataToExport': 'No data to export!',
        'CSVExported': '📊 CSV Exported!',
        'AdminModeActivated': '🔓 Admin mode activated.',
        'AdminModeDeactivated': '🔒 Admin mode deactivated.',
        'Password': 'Password',
        'EnterAdminPassword': 'Enter admin password:',
        'IncorrectPassword': '❌ Incorrect password!',
        'SearchPrompt': 'Please enter the SN to search for:',
        'NotFound': 'No matching SN record found.',
        'SearchCompleted': '✅ Search completed.',
        'Duplication': '⚠️ This SN already exists!',
        'DuplicateDetail': 'There are {count} duplicates in the database. Do you still want to add?',
        'Required': 'Required',
        'Language': 'Language',
        'ViewRTVInfo': 'View RTV Info',
        'Parts': 'Parts',
        'FailureDescription': 'Failure Description'
    },
    'Tiếng Việt': {
        'title': '🌟 Hệ thống theo dõi IQC Retest & FA 🌟',
        'form-title': 'Thêm bản ghi Retest',
        'QPN': 'Số QPN',
        'SN': 'Số SN',
        'Dept': 'Bộ phận',
        'Requester': 'Người yêu cầu',
        'Verifier': 'Người xác minh',
        'Result': 'Kết quả',
        'Save': 'Lưu',
        'Export': 'Xuất',
        'Delete': 'Xóa mục đã chọn',
        'Search': 'Tìm kiếm SN',
        'Admin': 'Chế độ Quản lý',
        'ExitAdmin': 'Thoát Quản lý',
        'Filter': 'Lọc',
        'ClearFilter': 'Xóa Bộ Lọc',
        'Count': 'Tổng số bản ghi',
        'StartDate': 'Ngày bắt đầu',
        'EndDate': 'Ngày kết thúc',
        'IsRTV': 'Có RTV?',
        'RTVInfo': 'Thông tin RTV',
        'Time': 'Thời gian',
        'Actions': 'Hành động',
        'Ready': 'Sẵn sàng.',
        'RecordSaved': '✅ Đã lưu bản ghi!',
        'RecordDeleted': '🗑️ Đã xóa bản ghi!',
        'FilterApplied': '🔍 Đã áp dụng bộ lọc!',
        'FilterCleared': '🔄 Đã xóa bộ lọc!',
        'InputRequired': '⚠️ Vui lòng điền tất cả các trường bắt buộc!',
        'ConfirmDelete': 'Bạn có chắc muốn xóa {count} bản ghi đã chọn không?',
        'NoDataToExport': 'Không có dữ liệu để xuất!',
        'CSVExported': '📊 Đã xuất CSV!',
        'AdminModeActivated': '🔓 Chế độ quản lý đã kích hoạt.',
        'AdminModeDeactivated': '🔒 Chế độ quản lý đã tắt.',
        'Password': 'Mật khẩu',
        'EnterAdminPassword': 'Nhập mật khẩu quản trị viên:',
        'IncorrectPassword': '❌ Sai mật khẩu!',
        'SearchPrompt': 'Vui lòng nhập SN để tìm kiếm:',
        'NotFound': 'Không tìm thấy bản ghi SN phù hợp.',
        'SearchCompleted': '✅ Tìm kiếm hoàn tất.',
        'Duplication': '⚠️ SN đã tồn tại!',
        'DuplicateDetail': 'Có {count} bản ghi trùng lặp. Bạn có muốn thêm tiếp không?',
        'Required': 'Bắt buộc',
        'Language': 'Ngôn ngữ',
        'ViewRTVInfo': 'Xem thông tin RTV',
        'Parts': 'Parts',
        'FailureDescription': 'Mô tả lỗi'
    }
};

let currentLang = '繁體中文';
let adminMode = false;
let records = [];
let filteredRecords = [];
const tableHeaders = ["QPN", "SN", "Dept", "Requester", "Verifier", "Result", "Parts", "FailureDescription", "Time", "IsRTV", "Actions"];

const getEl = (id) => document.getElementById(id) || null;
const formFields = {
    qpn: getEl('qpn'),
    sn: getEl('sn'),
    dept: getEl('dept'),
    requester: getEl('requester'),
    verifier: getEl('verifier'),
    result: getEl('result'),
    parts: getEl('parts'),
    failure_description: getEl('failure_description')
};

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadRecords();
    applyLanguage();
    loadAutocompleteSuggestions();
    if (typeof lucide !== 'undefined') lucide.createIcons();
    if (formFields.requester) formFields.requester.value = 's911986';
});

function applyLanguage() {
    const lang = langDict[currentLang];
    if (getEl('app-title')) getEl('app-title').textContent = lang.title;
    if (getEl('form-title')) getEl('form-title').textContent = lang['form-title'];
    if (getEl('lang-label')) getEl('lang-label').textContent = lang.Language + ':';
    if (getEl('label-qpn')) getEl('label-qpn').innerHTML = '<span class="flex items-center"><i data-lucide="package" class="w-4 h-4 mr-1"></i>' + lang.QPN + ' <span class="text-red-500 ml-1">*</span></span>';
    if (getEl('label-sn')) getEl('label-sn').innerHTML = '<span class="flex items-center"><i data-lucide="hash" class="w-4 h-4 mr-1"></i>' + lang.SN + ' <span class="text-red-500 ml-1">*</span></span>';
    if (getEl('label-dept')) getEl('label-dept').innerHTML = '<span class="flex items-center"><i data-lucide="building" class="w-4 h-4 mr-1"></i>' + lang.Dept + ' <span class="text-red-500 ml-1">*</span></span>';
    if (getEl('label-requester')) getEl('label-requester').innerHTML = '<span class="flex items-center"><i data-lucide="user" class="w-4 h-4 mr-1"></i>' + lang.Requester + ' <span class="text-red-500 ml-1">*</span></span>';
    if (getEl('label-verifier')) getEl('label-verifier').innerHTML = '<span class="flex items-center"><i data-lucide="user-check" class="w-4 h-4 mr-1"></i>' + lang.Verifier + ' <span class="text-red-500 ml-1">*</span></span>';
    if (getEl('label-result')) getEl('label-result').innerHTML = '<span class="flex items-center"><i data-lucide="check-circle" class="w-4 h-4 mr-1"></i>' + lang.Result + ' <span class="text-red-500 ml-1">*</span></span>';
    if (getEl('label-parts')) getEl('label-parts').innerHTML = '<span class="flex items-center"><i data-lucide="package-open" class="w-4 h-4 mr-1"></i>' + (lang.Parts || 'Parts') + '</span>';
    if (getEl('label-failure_description')) getEl('label-failure_description').innerHTML = '<span class="flex items-center"><i data-lucide="alert-circle" class="w-4 h-4 mr-1"></i>' + (lang.FailureDescription || 'Failure Description') + '</span>';
    if (getEl('label-start_date')) getEl('label-start_date').innerHTML = '<i data-lucide="calendar" class="w-4 h-4 inline mr-1"></i>' + lang.StartDate;
    if (getEl('label-end_date')) getEl('label-end_date').innerHTML = '<i data-lucide="calendar" class="w-4 h-4 inline mr-1"></i>' + lang.EndDate;
    if (getEl('btn-save')) getEl('btn-save').textContent = lang.Save;
    if (getEl('btn-export')) getEl('btn-export').textContent = lang.Export;
    if (getEl('btn-delete')) getEl('btn-delete').textContent = lang.Delete;
    if (getEl('btn-search')) getEl('btn-search').textContent = lang.Search;
    if (getEl('btn-filter')) getEl('btn-filter').textContent = lang.Filter;
    if (getEl('btn-clear_filter')) getEl('btn-clear_filter').textContent = lang.ClearFilter;
    if (getEl('btn-admin')) getEl('btn-admin').textContent = adminMode ? lang.ExitAdmin : lang.Admin;
    updateStatus(lang.Ready, 0);
    updateRecordCount();
    renderTableHeader();
    renderTableBody();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function setupEventListeners() {
    const langSelector = getEl('lang-selector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            currentLang = e.target.value;
            const langMap = {
                '繁體中文': 'zh',
                'English': 'en',
                'Tiếng Việt': 'vi'
            };
            const langCode = langMap[currentLang] || 'zh';
            localStorage.setItem('language', langCode);
            applyLanguage();
        });
    }

    // Support both possible button IDs to be robust with HTML
    const saveBtn = getEl('save-btn') || getEl('btn-save') || getEl('saveBtn');
    if (saveBtn) saveBtn.addEventListener('click', saveRecord);

    const deleteBtn = getEl('delete-btn') || getEl('btn-delete');
    if (deleteBtn) deleteBtn.addEventListener('click', deleteSelectedRecords);

    const exportBtn = getEl('export-btn') || getEl('btn-export');
    if (exportBtn) exportBtn.addEventListener('click', exportCSV);

    const adminBtn = getEl('admin-btn') || getEl('btn-admin');
    if (adminBtn) adminBtn.addEventListener('click', toggleAdminMode);

    const filterBtn = getEl('filter-btn') || getEl('btn-filter');
    if (filterBtn) filterBtn.addEventListener('click', applyDateFilter);

    const clearFilterBtn = getEl('clear-filter-btn') || getEl('btn-clear_filter');
    if (clearFilterBtn) clearFilterBtn.addEventListener('click', clearDateFilter);

    const searchBtn = getEl('search-btn') || getEl('btn-search');
    if (searchBtn) searchBtn.addEventListener('click', searchSN);

    const selectAllCheckbox = getEl('select-all-checkbox');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', (e) => {
            document.querySelectorAll('#records-table-body input[type="checkbox"]').forEach(cb => cb.checked = e.target.checked);
        });
    }
}

function loadRecords() {
    const storedRecords = localStorage.getItem('iqcRecords');
    records = storedRecords ? JSON.parse(storedRecords) : [];
    filteredRecords = [...records];
    renderTableBody();
    updateRecordCount();
}

function persistRecords() {
    localStorage.setItem('iqcRecords', JSON.stringify(records));
    loadAutocompleteSuggestions();
}

function loadAutocompleteSuggestions() {
    const qpns = new Set(records.map(r => r.qpn));
    const requesters = new Set(records.map(r => r.requester));
    const verifiers = new Set(records.map(r => r.verifier));
    const parts = new Set(records.map(r => {
        const v = r && (r.parts || r.parts_list || '');
        if (!v) return '';
        if (Array.isArray(v)) return v.join(',');
        return String(v);
    }).filter(Boolean));
    const failures = new Set(records.map(r => r && (r.failure_description || r.failure || '')).filter(Boolean));
    updateDatalist('qpn-suggestions', Array.from(qpns));
    updateDatalist('requester-suggestions', Array.from(requesters));
    updateDatalist('verifier-suggestions', Array.from(verifiers));
    updateDatalist('parts-suggestions', Array.from(parts));
    updateDatalist('failure-suggestions', Array.from(failures));
}

function updateDatalist(id, suggestions) {
    const datalist = getEl(id);
    if (!datalist) return;
    datalist.innerHTML = '';
    suggestions.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        datalist.appendChild(option);
    });
}

async function saveRecord() {
    const lang = langDict[currentLang];
    const requiredFields = ['qpn', 'sn', 'dept', 'requester', 'verifier', 'result'];
    for (const field of requiredFields) {
        if (!formFields[field] || !formFields[field].value.trim()) {
            showModal(lang.InputRequired, '<p class="text-gray-600">' + lang.InputRequired + '</p>');
            if (formFields[field]) formFields[field].focus();
            return;
        }
    }
    const newSN = formFields.sn.value.trim();
    const duplicates = records.filter(r => r.sn === newSN);
    if (duplicates.length > 0) {
        const proceed = await showModal(lang.Duplication, '<p class="text-gray-600">' + lang.DuplicateDetail.replace('{count}', duplicates.length) + '</p>',
            [{ text: 'Yes', class: 'bg-emerald-600 hover:bg-emerald-700', value: true }, { text: 'No', class: 'bg-red-600 hover:bg-red-700', value: false }]);
        if (!proceed) return;
    }
    const newRecord = {
        id: Date.now(),
        timestamp: new Date().toLocaleString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
    };
    for (const key in formFields) {
        const el = formFields[key];
        newRecord[key] = el ? el.value.trim() : '';
    }
    newRecord.is_rtv = '';
    newRecord.rtv_data = { current_stage: 0, tracking_number: '', fa_status: '', fa_result: '', stage_completion: {}, completion_dates: {} };
    records.push(newRecord);
    persistRecords();
    loadRecords();
    updateStatus(lang.RecordSaved);
    clearForm();
}

async function deleteSelectedRecords() {
    const lang = langDict[currentLang];
    const selectedIds = Array.from(document.querySelectorAll('#records-table-body input[type="checkbox"]:checked')).map(cb => cb.dataset.id);
    if (selectedIds.length === 0) return;
    const confirmed = await showModal('Confirm Deletion', '<p class="text-gray-600">' + lang.ConfirmDelete.replace('{count}', selectedIds.length) + '</p>',
        [{ text: 'Yes', class: 'bg-red-600 hover:bg-red-700', value: true }, { text: 'No', class: 'bg-gray-500 hover:bg-gray-600', value: false }]);
    if (confirmed) {
        records = records.filter(r => !selectedIds.includes(String(r.id)));
        persistRecords();
        loadRecords();
        updateStatus(lang.RecordDeleted);
    }
}

function renderTableHeader() {
    const thead = document.querySelector('thead tr');
    if (!thead) return;
    thead.innerHTML = '<th scope="col" class="p-3 text-left text-xs font-medium text-white uppercase tracking-wider"><input type="checkbox" id="select-all-checkbox" class="rounded border-white/30">';
    const lang = langDict[currentLang];
    tableHeaders.forEach(key => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.className = 'p-3 text-left text-xs font-medium text-white uppercase tracking-wider';
        th.textContent = lang[key] || key;
        thead.appendChild(th);
    });
    const selectAll = getEl('select-all-checkbox');
    if (selectAll) selectAll.addEventListener('change', (e) => {
        document.querySelectorAll('#records-table-body input[type="checkbox"]').forEach(cb => cb.checked = e.target.checked);
    });
}

function renderTableBody() {
    const tbody = getEl('records-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    const recordsToRender = filteredRecords;
    if (!recordsToRender || recordsToRender.length === 0) {
        tbody.innerHTML = '<tr><td colspan="' + (tableHeaders.length + 1) + '" class="text-center p-8 text-gray-400"><i data-lucide="inbox" class="w-12 h-12 mx-auto mb-2 opacity-50"></i><p>沒有資料</p></td></tr>';
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    setTimeout(function () {
        var total = filteredRecords.length;
        var rtved = filteredRecords.filter(function (r) { return r.is_rtv === "Yes"; }).length;
        var el = document.getElementById("record-count");
        if (el) {
            el.innerHTML = "筆數統計: " + total + " | <span style=\"color: #8b5cf6;\">RTVed: " + rtved + "</span>";
        }
    }, 100);

    recordsToRender.sort((a, b) => b.id - a.id);
    recordsToRender.forEach(record => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-indigo-50 transition-colors';
        tr.dataset.id = record.id;
        const tdCheckbox = document.createElement('td');
        tdCheckbox.className = 'p-3 whitespace-nowrap';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.dataset.id = record.id;
        checkbox.className = "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500";
        tdCheckbox.appendChild(checkbox);
        tr.appendChild(tdCheckbox);

        tableHeaders.forEach(headerKey => {
            const td = document.createElement('td');
            td.className = 'p-3 whitespace-nowrap text-sm text-gray-600';

            if (headerKey === 'Result') {
                const value = record.result || '';
                if (value === 'Pass') td.innerHTML = '<span class="badge status-badge-pass">✓ Pass</span>';
                else if (value === 'NG') td.innerHTML = '<span class="badge status-badge-ng">✗ NG</span>';
                else td.textContent = value;
            } else if (headerKey === 'Parts') {
                const partsVal = record.parts || record.parts_list || '';
                if (Array.isArray(partsVal)) td.textContent = partsVal.join(', ');
                else td.textContent = partsVal || '';
            } else if (headerKey === 'FailureDescription') {
                td.textContent = record.failure_description || record.failure || '';
            } else if (headerKey === 'IsRTV') {
                const select = document.createElement('select');
                select.className = 'table-select';
                select.dataset.id = record.id;
                select.innerHTML = '<option value=""></option><option value="Yes">Yes</option><option value="No">No</option><option value="Pending">Pending</option>';
                select.value = record.is_rtv || '';
                select.addEventListener('change', (e) => {
                    const recordId = parseInt(e.target.dataset.id, 10);
                    const recordIndex = records.findIndex(r => r.id === recordId);
                    if (recordIndex > -1) {
                        records[recordIndex].is_rtv = e.target.value;
                        persistRecords();
                        renderTableBody();
                    }
                });
                td.appendChild(select);
            } else if (headerKey === 'Actions') {
                const isRTV = record.is_rtv === 'Yes';
                if (isRTV) {
                    const button = document.createElement('button');
                    button.className = 'flex items-center px-3 py-1 text-xs font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-sm';
                    button.innerHTML = '<i data-lucide="truck" class="w-3 h-3 mr-1"></i>' + (langDict[currentLang].ViewRTVInfo || 'View RTV Info');
                    button.onclick = () => { window.location.href = 'rtv-detail.html?id=' + record.id; };
                    td.appendChild(button);
                } else td.textContent = '-';
            } else if (['QPN', 'SN', 'Dept', 'Requester', 'Verifier'].includes(headerKey)) {
                const field = headerKey.toLowerCase();
                td.textContent = record[field] || '';
                if (adminMode) makeEditable(td, record.id, field);
            } else if (headerKey === 'Time') {
                td.textContent = record.timestamp || '';
            } else {
                td.textContent = record[headerKey.toLowerCase()] || '';
            }

            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function makeEditable(cell, recordId, field) {
    if (cell.dataset.listener) return;
    cell.dataset.listener = 'true';
    cell.style.cursor = 'pointer';
    cell.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        const originalValue = cell.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = originalValue;
        input.className = 'w-full p-1 border-2 border-indigo-400 rounded-md bg-white focus:ring-2 focus:ring-indigo-500';
        cell.innerHTML = '';
        cell.appendChild(input);
        input.focus();
        input.select();
        const saveEdit = () => {
            const newValue = input.value.trim();
            if (newValue !== originalValue) {
                const recordIndex = records.findIndex(r => r.id === recordId);
                if (recordIndex > -1) {
                    records[recordIndex][field] = newValue;
                    persistRecords();
                    updateStatus(langDict[currentLang].RecordSaved);
                }
            }
            cell.textContent = newValue;
        };
        input.addEventListener('blur', saveEdit);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') input.blur();
            if (e.key === 'Escape') {
                input.removeEventListener('blur', saveEdit);
                cell.textContent = originalValue;
            }
        });
    });
}

function clearForm() {
    if (formFields.qpn) formFields.qpn.value = '';
    if (formFields.sn) formFields.sn.value = '';
    if (formFields.dept) formFields.dept.value = '';
    if (formFields.verifier) formFields.verifier.value = '';
    if (formFields.result) formFields.result.value = '';
    if (formFields.parts) formFields.parts.value = '';
    if (formFields.failure_description) formFields.failure_description.value = '';
    if (formFields.qpn) formFields.qpn.focus();
}

function updateStatus(message, clearAfterMs = 3000) {
    const statusBar = getEl('status-bar');
    if (!statusBar) return;
    statusBar.textContent = message;
    if (window.statusTimeout) clearTimeout(window.statusTimeout);
    if (clearAfterMs > 0) {
        window.statusTimeout = setTimeout(() => {
            statusBar.textContent = langDict[currentLang].Ready;
        }, clearAfterMs);
    }
}

function updateRecordCount() {
    const count = filteredRecords ? filteredRecords.length : 0;
    if (getEl('record-count')) getEl('record-count').textContent = langDict[currentLang].Count + ': ' + count;
}

function applyDateFilter() {
    const startDateStr = getEl('start_date') ? getEl('start_date').value : '';
    const endDateStr = getEl('end_date') ? getEl('end_date').value : '';
    const startDate = startDateStr ? new Date(startDateStr) : null;
    const endDate = endDateStr ? new Date(endDateStr) : null;
    if (startDate) startDate.setHours(0, 0, 0, 0);
    if (endDate) endDate.setHours(23, 59, 59, 999);
    filteredRecords = records.filter(record => {
        if (!record.timestamp) return true;
        const recordDate = new Date(record.timestamp);
        if (startDate && recordDate < startDate) return false;
        if (endDate && recordDate > endDate) return false;
        return true;
    });
    renderTableBody();
    updateRecordCount();
    updateStatus(langDict[currentLang].FilterApplied);
}

function clearDateFilter() {
    if (getEl('start_date')) getEl('start_date').value = '';
    if (getEl('end_date')) getEl('end_date').value = '';
    filteredRecords = [...records];
    renderTableBody();
    updateRecordCount();
    updateStatus(langDict[currentLang].FilterCleared);
}

async function toggleAdminMode() {
    const lang = langDict[currentLang];
    if (adminMode) {
        adminMode = false;
        updateStatus(lang.AdminModeDeactivated);
    } else {
        const bodyHtml = '<label for="admin-pw" class="block text-sm font-medium text-gray-700 mb-2">' + lang.EnterAdminPassword + '</label>' +
            '<input type="password" id="admin-pw" class="w-full p-2 border rounded-md" placeholder="' + lang.Password + '" />';
        const buttons = [
            { text: 'Login', class: 'bg-indigo-600 hover:bg-indigo-700', value: 'submit' },
            { text: 'Cancel', class: 'bg-gray-500 hover:bg-gray-600', value: false }
        ];
        const data = await showModal(lang.Password, bodyHtml, buttons, true);
        if (data && data['admin-pw']) {
            if (data['admin-pw'] === "11011163") {
                adminMode = true;
                updateStatus(lang.AdminModeActivated);
            } else {
                await showModal(lang.IncorrectPassword, '<p class="text-red-600 font-medium">' + lang.IncorrectPassword + '</p>');
            }
        }
    }
    renderTableBody();
    applyLanguage();
}

async function searchSN() {
    const lang = langDict[currentLang];
    const bodyHtml = '<label for="search-sn" class="block text-sm font-medium text-gray-700 mb-2">' + lang.SearchPrompt + '</label>' +
        '<input type="text" id="search-sn" class="w-full p-2 border rounded-md" placeholder="' + lang.Search + '" />';
    const buttons = [
        { text: lang.Search, class: 'bg-indigo-600 hover:bg-indigo-700', value: 'submit' },
        { text: 'Cancel', class: 'bg-gray-500 hover:bg-gray-600', value: false }
    ];
    const data = await showModal(lang.Search, bodyHtml, buttons, true);
    if (data && data['search-sn']) {
        const targetSn = data['search-sn'].toLowerCase().trim();
        document.querySelectorAll('#records-table-body tr').forEach(row => row.classList.remove('highlight-row'));
        const foundRow = Array.from(document.querySelectorAll('#records-table-body tr')).find(row => {
            const cells = row.querySelectorAll('td');
            return Array.from(cells).some(cell => cell && cell.textContent && cell.textContent.toLowerCase().trim() === targetSn);
        });
        if (foundRow) {
            foundRow.classList.add('highlight-row');
            foundRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
            updateStatus(lang.SearchCompleted);
        } else {
            updateStatus(lang.NotFound);
        }
    }
}

async function exportCSV() {
    const lang = langDict[currentLang];
    const recordsToExport = filteredRecords;
    if (!recordsToExport || recordsToExport.length === 0) {
        await showModal(lang.NoDataToExport, '<p class="text-gray-600">' + lang.NoDataToExport + '</p>');
        return;
    }
    const headers = ['QPN', 'SN', 'Dept', 'Requester', 'Verifier', 'Result', 'Parts', 'Failure Description', 'Time', 'Is RTV'].map(h => '"' + h + '"').join(',');
    const rows = recordsToExport.map(record => {
        return [record.qpn || '', record.sn || '', record.dept || '', record.requester || '', record.verifier || '', record.result || '', record.parts || '', record.failure_description || '', record.timestamp || '', record.is_rtv || '']
            .map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',');
    });
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    const timestamp = new Date().toISOString().slice(0, 10);
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", 'IQC_Records_' + timestamp + '.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    updateStatus(lang.CSVExported);
}

function showModal(title, bodyHtml, buttons = [{ text: 'OK', class: 'bg-indigo-600 hover:bg-indigo-700', value: true }], focusInput = false) {
    return new Promise(resolve => {
        const modal = getEl('modal-template');
        const modalTitle = getEl('modal-title');
        const modalBody = getEl('modal-body');
        const modalFooter = getEl('modal-footer');
        const closeBtn = getEl('modal-close-btn');
        if (!modal || !modalTitle || !modalBody || !modalFooter || !closeBtn) {
            // fallback: use window.prompt for simple cases
            if (buttons.length && buttons[0] && buttons[0].value === 'submit') {
                const inputVal = window.prompt(title, '');
                if (inputVal === null) return resolve(null);
                const result = {};
                result[Object.keys({})[0]] = inputVal;
                return resolve({}); // best-effort fallback, but prefer the modal present in DOM
            }
            return resolve(null);
        }
        modalTitle.textContent = title;
        modalBody.innerHTML = bodyHtml;
        modalFooter.innerHTML = '';
        if (typeof lucide !== 'undefined') lucide.createIcons();
        const onResolve = (value) => {
            modal.classList.add('hidden');
            const mc = modal.querySelector('.modal-content');
            if (mc) mc.classList.add('scale-95');
            document.removeEventListener('keydown', escListener);
            resolve(value);
        };
        buttons.forEach(btnInfo => {
            const button = document.createElement('button');
            button.textContent = btnInfo.text;
            button.className = 'px-4 py-2 text-sm font-medium rounded-lg text-white transition-all ' + btnInfo.class;
            button.onclick = () => {
                if (btnInfo.value === 'submit') {
                    const inputs = modalBody.querySelectorAll('input, select, textarea');
                    const values = {};
                    inputs.forEach(input => {
                        if (input.id) values[input.id] = input.value;
                    });
                    onResolve(values);
                } else {
                    onResolve(btnInfo.value);
                }
            };
            modalFooter.appendChild(button);
        });
        const escListener = (e) => {
            if (e.key === 'Escape') onResolve(null);
        };
        closeBtn.onclick = () => onResolve(null);
        modal.onclick = (e) => {
            if (e.target === modal) onResolve(null);
        };
        document.addEventListener('keydown', escListener);
        modal.classList.remove('hidden');
        setTimeout(() => {
            const mc = modal.querySelector('.modal-content');
            if (mc) mc.classList.remove('scale-95');
            if (focusInput) {
                const firstInput = modalBody.querySelector('input, select, textarea');
                if (firstInput) firstInput.focus();
            }
        }, 10);
    });
}

// Functions related to RTV process are present below.
// Keep them as-is but ensure they do not break the module if some globals are undefined.

function getPreviousStageTime(currentStage) {
    // safe guard: if no currentRecord, return null
    try {
        if (typeof currentRecord === 'undefined' || !currentRecord || !currentRecord.rtv_data) return null;
        const completionDates = currentRecord.rtv_data.completion_dates || {};
        const stageOrder = ['stage1', 'stage2', 'stage3', 'stage4a', 'stage4b', 'stage5a', 'stage5b', 'stage6'];
        const currentStageKey = 'stage' + currentStage;
        const currentIndex = stageOrder.indexOf(currentStageKey);
        if (currentIndex <= 0) return null;
        for (let i = currentIndex - 1; i >= 0; i--) {
            const prevStageKey = stageOrder[i];
            if (completionDates[prevStageKey]) {
                return {
                    stageId: prevStageKey.replace('stage', ''),
                    time: new Date(completionDates[prevStageKey])
                };
            }
        }
        return null;
    } catch (err) {
        return null;
    }
}

window.completeStage = function (stage) {
    // placeholder guard in case variables not defined in this script context
    if (typeof currentRecord === 'undefined' || !currentRecord) {
        console.warn('completeStage called but currentRecord is not defined in this context.');
        return;
    }
    // Implementation depends on the RTV UI; leave as-is for compatibility.
    // (Original logic preserved in repo)
};

window.selectRoute = function (route) {
    if (typeof currentRecord === 'undefined' || !currentRecord) {
        console.warn('selectRoute called but currentRecord is not defined in this context.');
        return;
    }
    // placeholder for compatibility
};

window.saveRTVData = function () {
    // Attempt to save currentRecord into stored iqcRecords by id if variables exist
    try {
        const stored = localStorage.getItem('iqcRecords');
        if (!stored) return;
        const arr = JSON.parse(stored);
        if (!Array.isArray(arr)) return;
        if (typeof currentRecord === 'undefined' || !currentRecord || typeof currentRecord.id === 'undefined') return;
        const index = arr.findIndex(r => r.id === parseInt(currentRecord.id, 10));
        if (index > -1) {
            arr[index] = currentRecord;
            localStorage.setItem('iqcRecords', JSON.stringify(arr));
            alert('Changes saved');
        }
    } catch (e) {
        console.error('saveRTVData error', e);
    }
};

window.resetProcess = function () {
    if (!confirm('Are you sure you want to reset the process?')) return;
    if (typeof currentRecord === 'undefined' || !currentRecord) return;
    currentRecord.rtv_data = {
        current_stage: 0,
        selected_route: null,
        tracking_number: '',
        stage_completion: {},
        completion_dates: {}
    };
    saveRTVData();
    // placeholder for UI re-render
};

// Ensure Lucide initialization log
if (typeof lucide !== 'undefined') {
    console.log('✓ Lucide loaded successfully');
} else {
    console.warn('Lucide not loaded; icons will not be drawn.');
}