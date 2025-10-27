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
        'ViewRTVInfo': '查看 RTV 信息'
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
        'ViewRTVInfo': 'View RTV Info'
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
        'ViewRTVInfo': 'Xem thông tin RTV'
    }
};

let currentLang = '繁體中文';
let adminMode = false;
let records = [];
let filteredRecords = [];
const tableHeaders = ["QPN", "SN", "Dept", "Requester", "Verifier", "Result", "Time", "IsRTV", "Actions"];

const getEl = (id) => document.getElementById(id);
const formFields = {
    qpn: getEl('qpn'), 
    sn: getEl('sn'), 
    dept: getEl('dept'), 
    requester: getEl('requester'), 
    verifier: getEl('verifier'),
    result: getEl('result'),
};

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadRecords();
    applyLanguage();
    loadAutocompleteSuggestions();
    lucide.createIcons();
    formFields.requester.value = 's911986';
});

function applyLanguage() {
    const lang = langDict[currentLang];
    getEl('app-title').textContent = lang.title;
    getEl('form-title').textContent = lang['form-title'];
    getEl('lang-label').textContent = lang.Language + ':';
    getEl('label-qpn').innerHTML = '<span class="flex items-center"><i data-lucide="package" class="w-4 h-4 mr-1"></i>' + lang.QPN + ' <span class="text-red-500 ml-1">*</span></span>';
    getEl('label-sn').innerHTML = '<span class="flex items-center"><i data-lucide="hash" class="w-4 h-4 mr-1"></i>' + lang.SN + ' <span class="text-red-500 ml-1">*</span></span>';
    getEl('label-dept').innerHTML = '<span class="flex items-center"><i data-lucide="building" class="w-4 h-4 mr-1"></i>' + lang.Dept + ' <span class="text-red-500 ml-1">*</span></span>';
    getEl('label-requester').innerHTML = '<span class="flex items-center"><i data-lucide="user" class="w-4 h-4 mr-1"></i>' + lang.Requester + ' <span class="text-red-500 ml-1">*</span></span>';
    getEl('label-verifier').innerHTML = '<span class="flex items-center"><i data-lucide="user-check" class="w-4 h-4 mr-1"></i>' + lang.Verifier + ' <span class="text-red-500 ml-1">*</span></span>';
    getEl('label-result').innerHTML = '<span class="flex items-center"><i data-lucide="check-circle" class="w-4 h-4 mr-1"></i>' + lang.Result + ' <span class="text-red-500 ml-1">*</span></span>';
    getEl('label-start_date').innerHTML = '<i data-lucide="calendar" class="w-4 h-4 inline mr-1"></i>' + lang.StartDate;
    getEl('label-end_date').innerHTML = '<i data-lucide="calendar" class="w-4 h-4 inline mr-1"></i>' + lang.EndDate;
    getEl('btn-save').textContent = lang.Save;
    getEl('btn-export').textContent = lang.Export;
    getEl('btn-delete').textContent = lang.Delete;
    getEl('btn-search').textContent = lang.Search;
    getEl('btn-filter').textContent = lang.Filter;
    getEl('btn-clear_filter').textContent = lang.ClearFilter;
    getEl('btn-admin').textContent = adminMode ? lang.ExitAdmin : lang.Admin;
    updateStatus(lang.Ready, 0);
    updateRecordCount();
    renderTableHeader();
    renderTableBody();
    lucide.createIcons();
}

function setupEventListeners() {
    getEl('lang-selector').addEventListener('change', (e) => { 
    currentLang = e.target.value; 
    
    // 轉換為標準語言代碼並保存到 localStorage
    const langMap = {
        '繁體中文': 'zh',
        'English': 'en',
        'Tiếng Việt': 'vi'
    };
    const langCode = langMap[currentLang] || 'zh';
    localStorage.setItem('language', langCode);
    console.log('Language saved:', langCode);
    
    applyLanguage(); 
});
    getEl('save-btn').addEventListener('click', saveRecord);
    getEl('delete-btn').addEventListener('click', deleteSelectedRecords);
    getEl('export-btn').addEventListener('click', exportCSV);
    getEl('admin-btn').addEventListener('click', toggleAdminMode);
    getEl('filter-btn').addEventListener('click', applyDateFilter);
    getEl('clear-filter-btn').addEventListener('click', clearDateFilter);
    getEl('search-btn').addEventListener('click', searchSN);
    getEl('select-all-checkbox').addEventListener('change', (e) => {
        document.querySelectorAll('#records-table-body input[type="checkbox"]').forEach(cb => cb.checked = e.target.checked);
    });
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
    updateDatalist('qpn-suggestions', Array.from(qpns));
    updateDatalist('requester-suggestions', Array.from(requesters));
    updateDatalist('verifier-suggestions', Array.from(verifiers));
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
        if (!formFields[field].value.trim()) {
            showModal(lang.InputRequired, '<p class="text-gray-600">' + lang.InputRequired + '</p>');
            formFields[field].focus();
            return;
        }
    }
    const newSN = formFields.sn.value.trim();
    const duplicates = records.filter(r => r.sn === newSN);
    if (duplicates.length > 0) {
        const proceed = await showModal(lang.Duplication, '<p class="text-gray-600">' + lang.DuplicateDetail.replace('{count}', duplicates.length) + '</p>', 
            [{text: 'Yes', class: 'bg-emerald-600 hover:bg-emerald-700', value: true}, {text: 'No', class: 'bg-red-600 hover:bg-red-700', value: false}]);
        if (!proceed) return;
    }
    const newRecord = {
        id: Date.now(),
        timestamp: new Date().toLocaleString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
    };
    for (const key in formFields) newRecord[key] = formFields[key].value.trim();
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
        [{text: 'Yes', class: 'bg-red-600 hover:bg-red-700', value: true}, {text: 'No', class: 'bg-gray-500 hover:bg-gray-600', value: false}]);
    if (confirmed) {
        records = records.filter(r => !selectedIds.includes(String(r.id)));
        persistRecords();
        loadRecords();
        updateStatus(lang.RecordDeleted);
    }
}

function renderTableHeader() {
    const thead = document.querySelector('thead tr');
    thead.innerHTML = '<th scope="col" class="p-3 text-left text-xs font-medium text-white uppercase tracking-wider"><input type="checkbox" id="select-all-checkbox" class="rounded border-white/30"></th>';
    const lang = langDict[currentLang];
    tableHeaders.forEach(key => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.className = 'p-3 text-left text-xs font-medium text-white uppercase tracking-wider';
        th.textContent = lang[key] || key;
        thead.appendChild(th);
    });
    getEl('select-all-checkbox').addEventListener('change', (e) => {
        document.querySelectorAll('#records-table-body input[type="checkbox"]').forEach(cb => cb.checked = e.target.checked);
    });
}

function renderTableBody() {
    const tbody = getEl('records-table-body');
    tbody.innerHTML = '';
    const recordsToRender = filteredRecords;
    if (!recordsToRender || recordsToRender.length === 0) {
        tbody.innerHTML = '<tr><td colspan="' + (tableHeaders.length + 1) + '" class="text-center p-8 text-gray-400"><i data-lucide="inbox" class="w-12 h-12 mx-auto mb-2 opacity-50"></i><p>沒有記錄。請新增您的第一筆資料！</p></td></tr>';
        lucide.createIcons();

    // 更新統計顯示
    const updateRecordCount = function() {
        const total = filteredRecords.length;
        const rtved = filteredRecords.filter(function(r) { return r.is_rtv === 'Yes'; }).length;
        const el = document.getElementById('record-count');
        if (el) {
            el.innerHTML = '筆數統計: ' + total + ' | <span style="color: #8b5cf6;">RTVed: ' + rtved + '</span>';
        }
    };
    updateRecordCount();


    // 更新統計顯示
    const updateRecordCount = function() {
        const total = filteredRecords.length;
        const rtved = filteredRecords.filter(function(r) { return r.is_rtv === 'Yes'; }).length;
        const el = document.getElementById('record-count');
        if (el) {
            el.innerHTML = '筆數統計: ' + total + ' | <span style="color: #8b5cf6;">RTVed: ' + rtved + '</span>';
        }
    };
    updateRecordCount();

        return;
    
    // 更新 RTV 統計
    
    }
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
                    button.innerHTML = '<i data-lucide="truck" class="w-3 h-3 mr-1"></i>' + langDict[currentLang].ViewRTVInfo;
                    button.onclick = () => { window.location.href = 'rtv-detail.html?id=' + record.id; };
                    td.appendChild(button);
                } else td.textContent = '-';
            } else if (['QPN', 'SN', 'Dept', 'Requester', 'Verifier'].includes(headerKey)) {
                const field = headerKey.toLowerCase();
                td.textContent = record[field] || '';
                if (adminMode) makeEditable(td, record.id, field);
            } else if (headerKey === 'Time') {
                td.textContent = record.timestamp || '';
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    lucide.createIcons();
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
    formFields.qpn.value = '';
    formFields.sn.value = '';
    formFields.dept.value = '';
    formFields.verifier.value = '';
    formFields.result.value = '';
    formFields.qpn.focus();
}

function updateStatus(message, clearAfterMs = 3000) {
    const statusBar = getEl('status-bar');
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
    getEl('record-count').textContent = langDict[currentLang].Count + ': ' + count;
}

function applyDateFilter() {
    const startDateStr = getEl('start_date').value;
    const endDateStr = getEl('end_date').value;
    const startDate = startDateStr ? new Date(startDateStr) : null;
    const endDate = endDateStr ? new Date(endDateStr) : null;
    if(startDate) startDate.setHours(0,0,0,0);
    if(endDate) endDate.setHours(23,59,59,999);
    filteredRecords = records.filter(record => {
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
    getEl('start_date').value = '';
    getEl('end_date').value = '';
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
        const data = await showModal(lang.Password, '<label for="admin-pw" class="block text-sm font-medium text-gray-700 mb-2">' + lang.EnterAdminPassword + '</label><input type="password" id="admin-pw" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500" placeholder="Enter password">',
            [{text: 'Login', class: 'bg-indigo-600 hover:bg-indigo-700', value: 'submit'}], true);
        if (data && data['admin-pw'] === "11011163") {
            adminMode = true;
            updateStatus(lang.AdminModeActivated);
        } else if (data !== null) {
            showModal(lang.IncorrectPassword, '<p class="text-red-600 font-medium">' + lang.IncorrectPassword + '</p>');
        }
    }
    renderTableBody();
    applyLanguage();
}

async function searchSN() {
    const lang = langDict[currentLang];
    const data = await showModal(lang.Search, '<label for="search-sn" class="block text-sm font-medium text-gray-700 mb-2">' + lang.SearchPrompt + '</label><input type="text" id="search-sn" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500" placeholder="Enter SN">',
        [{text: lang.Search, class: 'bg-indigo-600 hover:bg-indigo-700', value: 'submit'}], true);
    if (data && data['search-sn']) {
        const targetSn = data['search-sn'].toLowerCase().trim();
        document.querySelectorAll('#records-table-body tr').forEach(row => row.classList.remove('highlight-row'));
        const foundRow = Array.from(document.querySelectorAll('#records-table-body tr')).find(row => {
            const cells = row.querySelectorAll('td');
            return cells[2] && cells[2].textContent.toLowerCase() === targetSn;
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
    const headers = ['QPN', 'SN', 'Dept', 'Requester', 'Verifier', 'Result', 'Time', 'Is RTV'].map(h => '"' + h + '"').join(',');
    const rows = recordsToExport.map(record => {
        return [record.qpn || '', record.sn || '', record.dept || '', record.requester || '', record.verifier || '', record.result || '', record.timestamp || '', record.is_rtv || '']
            .map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',');
    });
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    const timestamp = new Date().toISOString().slice(0,10);
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", 'IQC_Records_' + timestamp + '.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    updateStatus(lang.CSVExported);
}

function showModal(title, bodyHtml, buttons = [{text: 'OK', class: 'bg-indigo-600 hover:bg-indigo-700', value: true}], focusInput = false) {
    return new Promise(resolve => {
        const modal = getEl('modal-template');
        const modalTitle = getEl('modal-title');
        const modalBody = getEl('modal-body');
        const modalFooter = getEl('modal-footer');
        const closeBtn = getEl('modal-close-btn');
        modalTitle.textContent = title;
        modalBody.innerHTML = bodyHtml;
        modalFooter.innerHTML = '';
        lucide.createIcons();
        const onResolve = (value) => {
            modal.classList.add('hidden');
            modal.querySelector('.modal-content').classList.add('scale-95');
            document.removeEventListener('keydown', escListener);
            resolve(value);
        };
        buttons.forEach(btnInfo => {
            const button = document.createElement('button');
            button.textContent = btnInfo.text;
            button.className = 'px-4 py-2 text-sm font-medium rounded-lg text-white transition-all ' + btnInfo.class;
            button.onclick = () => {
                if (btnInfo.value === 'submit') {
                    const inputs = modalBody.querySelectorAll('input, select');
                    const values = {};
                    inputs.forEach(input => values[input.id] = input.value);
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
            modal.querySelector('.modal-content').classList.remove('scale-95');
            if(focusInput) {
                const firstInput = modalBody.querySelector('input');
                if(firstInput) firstInput.focus();
            }
        }, 10);
    });
}
