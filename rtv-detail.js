let currentRecord = null;
let recordId = null;
let currentStage = 0;
let selectedRoute = null;
let currentLanguage = 'zh';

// 完整的多語言翻譯
const translations = {
    zh: {
        backButton: '返回',
        pageTitle: 'RTV 流程追蹤',
        qpnLabel: '料號 QPN',
        snLabel: 'SN',
        deptLabel: '需求部門',
        processLabel: '流程',
        progressLabel: '進度',
        kickOff: 'Kick Off',
        departed: '已離廠',
        selectRoute: '選擇運送方式',
        express: '快遞',
        returnShip: '退運',
        trackingNumber: '快遞單號',
        arrivedVendor: '已抵達廠商端',
        faInProgress: 'FA進行中',
        faCompleted: 'FA已完成',
        completed: '已完成',
        inProgress: '進行中',
        pending: '待處理',
        completeStage: '完成此階段',
        resetProcess: '重置流程',
        saveChanges: '保存更改',
        completionTime: '完成時間',
        trackingNumberLabel: '快遞單號',
        enterTrackingNumber: '輸入快遞單號',
        trackingNumberDisplay: '快遞單號',
        noRecordId: '錯誤：未指定記錄 ID！',
        selectRouteFirst: '⚠️ 請先選擇運送方式！',
        noTimeInput: '⚠️ 找不到完成時間輸入框！',
        selectTime: '⚠️ 請選擇完成時間！',
        enterTracking: '⚠️ 請輸入快遞單號！',
        changesSaved: '✅ 更改已保存！',
        processComplete: '🎉 流程已完成！',
        confirmReset: '確定要重置整個流程嗎？',
        timeOrderError: '⚠️ 時間不能早於前一個階段！',
        previousStageTime: '前一階段時間',
        currentStageTime: '當前選擇時間'
    },
    en: {
        backButton: 'Back',
        pageTitle: 'RTV Process Tracking',
        qpnLabel: 'QPN',
        snLabel: 'SN',
        deptLabel: 'Requesting Department',
        processLabel: 'Process',
        progressLabel: 'Progress',
        kickOff: 'Kick Off',
        departed: 'Departed',
        selectRoute: 'Select Shipping Method',
        express: 'Express',
        returnShip: 'Return',
        trackingNumber: 'Tracking Number',
        arrivedVendor: 'Arrived at Vendor',
        faInProgress: 'FA In Progress',
        faCompleted: 'FA Completed',
        completed: 'Completed',
        inProgress: 'In Progress',
        pending: 'Pending',
        completeStage: 'Complete This Stage',
        resetProcess: 'Reset Process',
        saveChanges: 'Save Changes',
        completionTime: 'Completion Time',
        trackingNumberLabel: 'Tracking Number',
        enterTrackingNumber: 'Enter Tracking Number',
        trackingNumberDisplay: 'Tracking No.',
        noRecordId: 'Error: No record ID specified!',
        selectRouteFirst: '⚠️ Please select shipping method first!',
        noTimeInput: '⚠️ Completion time input not found!',
        selectTime: '⚠️ Please select completion time!',
        enterTracking: '⚠️ Please enter tracking number!',
        changesSaved: '✅ Changes saved!',
        processComplete: '🎉 Process completed!',
        confirmReset: 'Are you sure you want to reset the entire process?',
        timeOrderError: '⚠️ Time cannot be earlier than previous stage!',
        previousStageTime: 'Previous stage time',
        currentStageTime: 'Current selected time'
    },
    vi: {
        backButton: 'Quay lại',
        pageTitle: 'Theo dõi quy trình RTV',
        qpnLabel: 'Mã QPN',
        snLabel: 'SN',
        deptLabel: 'Phòng ban yêu cầu',
        processLabel: 'Quy trình',
        progressLabel: 'Tiến độ',
        kickOff: 'Bắt đầu',
        departed: 'Đã xuất xưởng',
        selectRoute: 'Chọn phương thức vận chuyển',
        express: 'Chuyển phát nhanh',
        returnShip: 'Trả hàng',
        trackingNumber: 'Mã vận đơn',
        arrivedVendor: 'Đã đến nhà cung cấp',
        faInProgress: 'FA đang tiến hành',
        faCompleted: 'FA hoàn thành',
        completed: 'Hoàn thành',
        inProgress: 'Đang xử lý',
        pending: 'Chờ xử lý',
        completeStage: 'Hoàn thành giai đoạn này',
        resetProcess: 'Đặt lại quy trình',
        saveChanges: 'Lưu thay đổi',
        completionTime: 'Thời gian hoàn thành',
        trackingNumberLabel: 'Mã vận đơn',
        enterTrackingNumber: 'Nhập mã vận đơn',
        trackingNumberDisplay: 'Mã vận đơn',
        noRecordId: 'Lỗi: Không có ID bản ghi!',
        selectRouteFirst: '⚠️ Vui lòng chọn phương thức vận chuyển trước!',
        noTimeInput: '⚠️ Không tìm thấy ô nhập thời gian hoàn thành!',
        selectTime: '⚠️ Vui lòng chọn thời gian hoàn thành!',
        enterTracking: '⚠️ Vui lòng nhập mã vận đơn!',
        changesSaved: '✅ Đã lưu thay đổi!',
        processComplete: '🎉 Quy trình đã hoàn thành!',
        confirmReset: 'Bạn có chắc chắn muốn đặt lại toàn bộ quy trình không?',
        timeOrderError: '⚠️ Thời gian không được sớm hơn giai đoạn trước!',
        previousStageTime: 'Thời gian giai đoạn trước',
        currentStageTime: 'Thời gian đã chọn'
    }
};

const stages = {
    1: { icon: 'rocket', titleKey: 'kickOff' },
    2: { icon: 'package-open', titleKey: 'departed' },
    3: { icon: 'git-branch', titleKey: 'selectRoute', titleExpressKey: 'express', titleReturnKey: 'returnShip', isRoute: true },
    '4a': { icon: 'truck', titleKey: 'trackingNumber', needsInput: true, route: 'express' },
    '5a': { icon: 'map-pin', titleKey: 'arrivedVendor', route: 'express' },
    '4b': { icon: 'map-pin', titleKey: 'arrivedVendor', route: 'return' },
    6: { icon: 'microscope', titleKey: 'faInProgress' },
    7: { icon: 'check-circle', titleKey: 'faCompleted' }
};

// 獲取階段順序
function getStageOrder() {
    if (selectedRoute === 'express') {
        return [1, 2, 3, '4a', '5a', 6, 7];
    } else if (selectedRoute === 'return') {
        return [1, 2, 3, '4b', 6, 7];
    }
    return [1, 2, 3];
}

// 獲取前一個已完成階段的時間
function getPreviousStageTime(currentStageId) {
    const stageOrder = getStageOrder();
    const currentIndex = stageOrder.indexOf(currentStageId);
    
    if (currentIndex <= 0) return null;
    
    // 從當前階段往前找最近的已完成階段
    for (let i = currentIndex - 1; i >= 0; i--) {
        const prevStageId = stageOrder[i];
        const prevStageKey = 'stage' + prevStageId;
        const prevTime = currentRecord.rtv_data.completion_dates[prevStageKey];
        
        if (prevTime) {
            return {
                stageId: prevStageId,
                time: new Date(prevTime)
            };
        }
    }
    
    return null;
}

function t(key) {
    return translations[currentLanguage][key] || key;
}

function formatDateTime(isoString) {
    const date = new Date(isoString);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const h = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return `${y}-${m}-${d} ${h}:${min}:${s}`;
}

function formatDateTimeForInput(isoString) {
    const date = new Date(isoString);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const h = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${d}T${h}:${min}`;
}

function getCurrentDateTime() {
    return formatDateTimeForInput(new Date().toISOString());
}

function initLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
}

function updateUILanguage() {
    document.getElementById('page-title').textContent = t('pageTitle');
    document.getElementById('back-button-text').textContent = t('backButton');
    document.getElementById('qpn-label').textContent = t('qpnLabel');
    document.getElementById('sn-label').textContent = t('snLabel');
    document.getElementById('dept-label').textContent = t('deptLabel');
    document.getElementById('process-label').textContent = t('processLabel');
    document.getElementById('progress-label').textContent = t('progressLabel');
    document.getElementById('reset-button').textContent = t('resetProcess');
    document.getElementById('save-button').textContent = t('saveChanges');
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    
    const urlParams = new URLSearchParams(window.location.search);
    recordId = urlParams.get('id');
    if (!recordId) {
        alert(t('noRecordId'));
        window.location.href = 'index.html';
        return;
    }
    
    loadRecord();
    updateUILanguage();
    renderAllStages();
    lucide.createIcons();
});

function loadRecord() {
    const storedRecords = localStorage.getItem('iqcRecords');
    if (!storedRecords) {
        window.location.href = 'index.html';
        return;
    }
    const records = JSON.parse(storedRecords);
    currentRecord = records.find(r => r.id === parseInt(recordId));
    if (!currentRecord) {
        window.location.href = 'index.html';
        return;
    }
    if (!currentRecord.rtv_data) {
        currentRecord.rtv_data = {
            current_stage: 0,
            selected_route: null,
            tracking_number: '',
            stage_completion: {},
            completion_dates: {}
        };
    }
    currentStage = currentRecord.rtv_data.current_stage || 0;
    selectedRoute = currentRecord.rtv_data.selected_route || null;
    
    document.getElementById('display-qpn').textContent = currentRecord.qpn || '-';
    document.getElementById('display-sn').textContent = currentRecord.sn || '-';
    document.getElementById('display-dept').textContent = currentRecord.dept || '-';
}

function renderAllStages() {
    const container = document.getElementById('timeline-container');
    const line = container.querySelector('.connecting-line');
    container.innerHTML = '';
    if (line) container.appendChild(line);
    
    const allStages = getStageOrder();
    
    allStages.forEach(stageId => {
        if (selectedRoute) {
            const stage = stages[stageId];
            if (stage.route && stage.route !== selectedRoute) {
                return;
            }
        }
        
        const stageNode = createStageElement(stageId);
        container.appendChild(stageNode);
    });
    
    updateProgress();
    lucide.createIcons();
}

function createStageElement(stageId) {
    const stage = stages[stageId];
    const stageKey = 'stage' + stageId;
    const isCompleted = currentRecord.rtv_data.stage_completion[stageKey];
    const isActive = shouldBeActive(stageId);
    const completionDate = currentRecord.rtv_data.completion_dates[stageKey];
    
    let statusClass = 'pending';
    if (isCompleted) {
        statusClass = 'completed';
    } else if (isActive) {
        statusClass = 'active';
    }
    
    if (!selectedRoute && stage.route) {
        const div = document.createElement('div');
        div.className = 'stage-node pending';
        div.innerHTML = `
            <div class="stage-header">
                <i data-lucide="${stage.icon}" class="stage-icon"></i>
                <span class="stage-title">${t(stage.titleKey)}</span>
            </div>
            <div class="stage-dot dot-pending"></div>
            <span class="status-badge badge-pending">${t('pending')}</span>
        `;
        return div;
    }
    
    const stageDiv = document.createElement('div');
    stageDiv.className = `stage-node ${statusClass}`;
    
    let html = '';
    
    if (completionDate && !stage.isRoute) {
        html += `
            <div class="completion-time">
                <i data-lucide="clock"></i>
                <span>${t('completionTime')}</span>
                <span class="time-value">${formatDateTime(completionDate)}</span>
            </div>
        `;
    }
    
    let displayTitle = t(stage.titleKey);
    if (stageId === 3 && selectedRoute) {
        displayTitle = selectedRoute === 'express' ? t(stage.titleExpressKey) : t(stage.titleReturnKey);
    }
    
    html += `
        <div class="stage-header">
            <i data-lucide="${stage.icon}" class="stage-icon"></i>
            <span class="stage-title">${displayTitle}</span>
        </div>
    `;
    
    html += `
        <div class="stage-dot ${isCompleted ? 'dot-completed' : isActive ? 'dot-active' : 'dot-pending'}"></div>
    `;
    
    const statusText = isCompleted ? t('completed') : isActive ? t('inProgress') : t('pending');
    html += `
        <span class="status-badge ${isCompleted ? 'badge-completed' : isActive ? 'badge-active' : 'badge-pending'}">
            ${statusText}
        </span>
    `;
    
    html += '<div class="action-area">';
    
    if (stageId === '4a' && isCompleted && currentRecord.rtv_data.tracking_number) {
        html += `
            <div class="tracking-display">
                ${t('trackingNumberDisplay')}: ${currentRecord.rtv_data.tracking_number}
            </div>
        `;
    }
    
    if (stage.isRoute && !selectedRoute && isActive) {
        html += `
            <div class="route-selection">
                <button class="route-option" onclick="selectRoute('express')">
                    <i data-lucide="truck" style="color: #6366f1;"></i>
                    <span>${t('express')}</span>
                </button>
                <button class="route-option" onclick="selectRoute('return')">
                    <i data-lucide="package-x" style="color: #f97316;"></i>
                    <span>${t('returnShip')}</span>
                </button>
            </div>
        `;
    }
    
    if (isActive && !stage.isRoute && !isCompleted) {
        html += `
            <div style="margin-bottom: 0.75rem;">
                <label style="display: block; font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem; font-weight: 500;">
                    ${t('completionTime')}
                </label>
                <input type="datetime-local" id="completion-time-${stageId}" class="tracking-input" 
                       value="${getCurrentDateTime()}" 
                       style="width: 260px;">
            </div>
        `;
        
        if (stage.needsInput) {
            html += `
                <div style="margin-bottom: 0.75rem;">
                    <label style="display: block; font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem; font-weight: 500;">
                        ${t('trackingNumberLabel')}
                    </label>
                    <input type="text" id="tracking-number" class="tracking-input" 
                           placeholder="${t('enterTrackingNumber')}" 
                           value="${currentRecord.rtv_data.tracking_number || ''}"
                           style="width: 260px;">
                </div>
            `;
        }
        
        html += `
            <button class="complete-button" onclick="completeStage(${typeof stageId === 'string' ? "'" + stageId + "'" : stageId})">
                ${t('completeStage')}
            </button>
        `;
    }
    
    html += '</div>';
    
    stageDiv.innerHTML = html;
    return stageDiv;
}

function shouldBeActive(stageId) {
    const stageKey = 'stage' + stageId;
    if (currentRecord.rtv_data.stage_completion[stageKey]) return false;
    
    if (typeof stageId === 'number' && currentStage === stageId - 1) return true;
    if (stageId === 3 && currentStage === 2) return true;
    if (stageId === '4a' && currentStage === 3 && selectedRoute === 'express') return true;
    if (stageId === '4b' && currentStage === 3 && selectedRoute === 'return') return true;
    if (stageId === '5a' && currentStage === 4 && selectedRoute === 'express') return true;
    if (stageId === 6) {
        if (selectedRoute === 'express' && currentStage === 5) return true;
        if (selectedRoute === 'return' && currentStage === 4) return true;
    }
    if (stageId === 7 && currentStage === 6) return true;
    
    return false;
}

function updateProgress() {
    const completion = currentRecord.rtv_data.stage_completion;
    let total = selectedRoute === 'express' ? 7 : selectedRoute === 'return' ? 6 : 3;
    const completed = Object.values(completion).filter(v => v).length;
    const percent = Math.round((completed / total) * 100);
    
    document.getElementById('progress-percentage').textContent = percent + '%';
    document.getElementById('progress-line').style.width = percent + '%';
}

window.completeStage = function(stage) {
    const stageInfo = stages[stage];
    
    if (stageInfo.isRoute && !selectedRoute) {
        alert(t('selectRouteFirst'));
        return;
    }
    
    const completionTimeInput = document.getElementById('completion-time-' + stage);
    if (!completionTimeInput) {
        alert(t('noTimeInput'));
        return;
    }
    
    const completionTimeValue = completionTimeInput.value;
    if (!completionTimeValue) {
        alert(t('selectTime'));
        return;
    }
    
    const completionDate = new Date(completionTimeValue);
    
    // 驗證時間順序
    const previousStage = getPreviousStageTime(stage);
    if (previousStage) {
        if (completionDate < previousStage.time) {
            const prevTimeStr = formatDateTime(previousStage.time.toISOString());
            const currTimeStr = formatDateTime(completionDate.toISOString());
            alert(
                `${t('timeOrderError')}\n\n` +
                `${t('previousStageTime')}: ${prevTimeStr}\n` +
                `${t('currentStageTime')}: ${currTimeStr}`
            );
            return;
        }
    }
    
    if (stage === '4a') {
        const trackingNumber = document.getElementById('tracking-number').value.trim();
        if (!trackingNumber) {
            alert(t('enterTracking'));
            return;
        }
        currentRecord.rtv_data.tracking_number = trackingNumber;
    }
    
    const stageKey = 'stage' + stage;
    currentRecord.rtv_data.stage_completion[stageKey] = true;
    currentRecord.rtv_data.completion_dates[stageKey] = completionDate.toISOString();
    
    if (stage === 1) currentStage = 1;
    else if (stage === 2) currentStage = 2;
    else if (stage === 3) currentStage = 3;
    else if (stage === '4a' || stage === '4b') currentStage = 4;
    else if (stage === '5a') currentStage = 5;
    else if (stage === 6) currentStage = 6;
    else if (stage === 7) currentStage = 7;
    
    currentRecord.rtv_data.current_stage = currentStage;
    saveRTVData();
    renderAllStages();
    
    if (stage === 7) {
        setTimeout(() => alert(t('processComplete')), 500);
    }
};

window.selectRoute = function(route) {
    if (currentStage >= 3) return;
    
    selectedRoute = route;
    currentRecord.rtv_data.selected_route = route;
    
    const stageKey = 'stage3';
    currentRecord.rtv_data.stage_completion[stageKey] = true;
    
    currentStage = 3;
    currentRecord.rtv_data.current_stage = currentStage;
    
    saveRTVData();
    renderAllStages();
};

window.saveRTVData = function() {
    const storedRecords = localStorage.getItem('iqcRecords');
    const records = JSON.parse(storedRecords);
    const index = records.findIndex(r => r.id === parseInt(recordId));
    if (index > -1) {
        records[index] = currentRecord;
        localStorage.setItem('iqcRecords', JSON.stringify(records));
        alert(t('changesSaved'));
    }
};

window.resetProcess = function() {
    if (!confirm(t('confirmReset'))) return;
    currentRecord.rtv_data = {
        current_stage: 0,
        selected_route: null,
        tracking_number: '',
        stage_completion: {},
        completion_dates: {}
    };
    currentStage = 0;
    selectedRoute = null;
    saveRTVData();
    renderAllStages();
};
