const langDict = {
    '繁體中文': {
        'pageTitle': 'RTV 詳細信息',
        'btnBack': '返回主頁',
        'sectionBasic': '基本信息',
        'sectionTimeline': 'RTV 流程追蹤',
        'progressText': '進度',
        'labelQPN': '料號 QPN',
        'labelSN': 'SN',
        'labelDept': '部門',
        'stage1Title': 'Kick Off',
        'stage1Desc': 'RTV 流程啟動',
        'stage2Title': '已離廠',
        'stage2Desc': '物料已離開工廠',
        'stage3Title': '選擇運送方式',
        'stage3Desc': '請選擇快遞或退運',
        'stage4aTitle': '輸入快遞單號',
        'stage4aDesc': '請輸入快遞追蹤單號',
        'stage5aTitle': '已抵達廠商端',
        'stage5aDesc': '物料已送達廠商 (快遞)',
        'stage4bTitle': '已抵達廠商端',
        'stage4bDesc': '物料已送達廠商 (退運)',
        'stage6Title': 'FA進行中',
        'stage6Desc': '廠商正在進行失效分析',
        'stage7Title': 'FA已完成',
        'stage7Desc': '失效分析報告已完成',
        'labelTracking': '快遞單號',
        'trackingDisplay': '快遞單號',
        'routeExpressLabel': '快遞',
        'routeReturnLabel': '退運',
        'btnComplete': '完成此階段',
        'btnComplete4a': '確認單號並繼續',
        'btnComplete7': '完成整個流程',
        'btnReset': '重置流程',
        'btnCancel': '取消',
        'btnSave': '保存更改',
        'btnPrint': '列印報告',
        'statusReady': '準備就緒。',
        'statusSaved': '✅ 更改已保存！',
        'statusCompleted': '🎉 流程已完成！',
        'statusPending': '待處理',
        'statusInProgress': '進行中',
        'statusDone': '已完成',
        'recordNotFound': '❌ 找不到記錄！',
        'pleaseEnterTracking': '⚠️ 請輸入快遞單號！',
        'pleaseSelectRoute': '⚠️ 請先選擇運送方式！',
        'confirmReset': '確定要重置整個流程嗎？這將清除所有進度。',
        'language': '語言'
    },
    'English': {
        'pageTitle': 'RTV Details',
        'btnBack': 'Back',
        'sectionBasic': 'Basic Info',
        'sectionTimeline': 'RTV Process',
        'progressText': 'Progress',
        'labelQPN': 'QPN',
        'labelSN': 'SN',
        'labelDept': 'Dept',
        'stage1Title': 'Kick Off',
        'stage1Desc': 'RTV process initiated',
        'stage2Title': 'Departed Factory',
        'stage2Desc': 'Material left factory',
        'stage3Title': 'Select Shipping Method',
        'stage3Desc': 'Choose Express or Return',
        'stage4aTitle': 'Enter Tracking Number',
        'stage4aDesc': 'Please enter tracking number',
        'stage5aTitle': 'Arrived at Vendor',
        'stage5aDesc': 'Material arrived (Express)',
        'stage4bTitle': 'Arrived at Vendor',
        'stage4bDesc': 'Material arrived (Return)',
        'stage6Title': 'FA in Progress',
        'stage6Desc': 'Failure analysis ongoing',
        'stage7Title': 'FA Completed',
        'stage7Desc': 'FA report completed',
        'labelTracking': 'Tracking #',
        'trackingDisplay': 'Tracking #',
        'routeExpressLabel': 'Express',
        'routeReturnLabel': 'Return',
        'btnComplete': 'Complete',
        'btnComplete4a': 'Confirm & Continue',
        'btnComplete7': 'Complete Process',
        'btnReset': 'Reset',
        'btnCancel': 'Cancel',
        'btnSave': 'Save',
        'btnPrint': 'Print',
        'statusReady': 'Ready.',
        'statusSaved': '✅ Saved!',
        'statusCompleted': '🎉 Completed!',
        'statusPending': 'Pending',
        'statusInProgress': 'In Progress',
        'statusDone': 'Done',
        'recordNotFound': '❌ Not found!',
        'pleaseEnterTracking': '⚠️ Enter tracking number!',
        'pleaseSelectRoute': '⚠️ Select shipping method!',
        'confirmReset': 'Reset process?',
        'language': 'Language'
    },
    'Tiếng Việt': {
        'pageTitle': 'Chi tiết RTV',
        'btnBack': 'Quay lại',
        'sectionBasic': 'Thông tin',
        'sectionTimeline': 'Quy trình',
        'progressText': 'Tiến độ',
        'labelQPN': 'QPN',
        'labelSN': 'SN',
        'labelDept': 'Bộ phận',
        'stage1Title': 'Khởi động',
        'stage1Desc': 'Bắt đầu quy trình',
        'stage2Title': 'Đã rời xưởng',
        'stage2Desc': 'Vật liệu đã rời xưởng',
        'stage3Title': 'Chọn vận chuyển',
        'stage3Desc': 'Chọn Express hoặc Return',
        'stage4aTitle': 'Nhập số theo dõi',
        'stage4aDesc': 'Nhập số theo dõi',
        'stage5aTitle': 'Đã đến nhà cung cấp',
        'stage5aDesc': 'Đã đến (Express)',
        'stage4bTitle': 'Đã đến nhà cung cấp',
        'stage4bDesc': 'Đã đến (Return)',
        'stage6Title': 'FA đang tiến hành',
        'stage6Desc': 'Đang phân tích',
        'stage7Title': 'FA hoàn thành',
        'stage7Desc': 'Báo cáo hoàn thành',
        'labelTracking': 'Số theo dõi',
        'trackingDisplay': 'Số theo dõi',
        'routeExpressLabel': 'Express',
        'routeReturnLabel': 'Return',
        'btnComplete': 'Hoàn thành',
        'btnComplete4a': 'Xác nhận',
        'btnComplete7': 'Hoàn thành',
        'btnReset': 'Đặt lại',
        'btnCancel': 'Hủy',
        'btnSave': 'Lưu',
        'btnPrint': 'In',
        'statusReady': 'Sẵn sàng.',
        'statusSaved': '✅ Đã lưu!',
        'statusCompleted': '🎉 Hoàn thành!',
        'statusPending': 'Chờ',
        'statusInProgress': 'Đang',
        'statusDone': 'Xong',
        'recordNotFound': '❌ Không tìm thấy!',
        'pleaseEnterTracking': '⚠️ Nhập số!',
        'pleaseSelectRoute': '⚠️ Chọn vận chuyển!',
        'confirmReset': 'Đặt lại?',
        'language': 'Ngôn ngữ'
    }
};

let currentLang = '繁體中文';
let currentRecord = null;
let recordId = null;
let currentStage = 0;
let selectedRoute = null; // 'express' or 'return'

const getEl = (id) => document.getElementById(id);

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    recordId = urlParams.get('id');
    if (!recordId) {
        alert('錯誤：未指定記錄 ID！');
        window.location.href = 'index.html';
        return;
    }
    loadRecord();
    setupEventListeners();
    applyLanguage();
    lucide.createIcons();
});

function loadRecord() {
    const storedRecords = localStorage.getItem('iqcRecords');
    if (!storedRecords) {
        updateStatus(langDict[currentLang].recordNotFound);
        setTimeout(() => window.location.href = 'index.html', 2000);
        return;
    }
    const records = JSON.parse(storedRecords);
    currentRecord = records.find(r => r.id === parseInt(recordId));
    if (!currentRecord) {
        updateStatus(langDict[currentLang].recordNotFound);
        setTimeout(() => window.location.href = 'index.html', 2000);
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
    displayRecordInfo();
    loadRTVData();
    updateAllStages();
}

function displayRecordInfo() {
    getEl('display-qpn').textContent = currentRecord.qpn || '-';
    getEl('display-sn').textContent = currentRecord.sn || '-';
    getEl('display-dept').textContent = currentRecord.dept || '-';
}

function loadRTVData() {
    const data = currentRecord.rtv_data || {};
    if (data.tracking_number) {
        getEl('tracking-number').value = data.tracking_number;
        getEl('tracking-value').textContent = data.tracking_number;
    }
    if (data.selected_route) {
        selectedRoute = data.selected_route;
        highlightSelectedRoute();
    }
}

function saveRTVData() {
    const data = currentRecord.rtv_data;
    data.tracking_number = getEl('tracking-number').value;
    data.selected_route = selectedRoute;
    const storedRecords = localStorage.getItem('iqcRecords');
    const records = JSON.parse(storedRecords);
    const index = records.findIndex(r => r.id === parseInt(recordId));
    if (index > -1) {
        records[index] = currentRecord;
        localStorage.setItem('iqcRecords', JSON.stringify(records));
        updateStatus(langDict[currentLang].statusSaved);
    }
}

function selectRoute(route) {
    if (currentStage >= 3) return; // 已經選擇過了
    
    selectedRoute = route;
    currentRecord.rtv_data.selected_route = route;
    highlightSelectedRoute();
    
    // 自動完成 Stage 3
    setTimeout(() => {
        completeStage(3);
    }, 500);
}

function highlightSelectedRoute() {
    const expressBtn = getEl('route-express');
    const returnBtn = getEl('route-return');
    
    expressBtn.classList.remove('selected');
    returnBtn.classList.remove('selected');
    
    if (selectedRoute === 'express') {
        expressBtn.classList.add('selected');
    } else if (selectedRoute === 'return') {
        returnBtn.classList.add('selected');
    }
}

function completeStage(stage) {
    const lang = langDict[currentLang];
    
    // Stage 3: 必須選擇路線
    if (stage === 3) {
        if (!selectedRoute) {
            alert(lang.pleaseSelectRoute);
            return;
        }
    }
    
    // Stage 4a: 快遞路線，需要輸入單號
    if (stage === '4a') {
        const trackingNumber = getEl('tracking-number').value.trim();
        if (!trackingNumber) {
            alert(lang.pleaseEnterTracking);
            getEl('tracking-number').focus();
            return;
        }
        getEl('tracking-value').textContent = trackingNumber;
    }
    
    // 記錄完成狀態
    const stageKey = 'stage' + stage;
    currentRecord.rtv_data.stage_completion[stageKey] = true;
    currentRecord.rtv_data.completion_dates[stageKey] = new Date().toISOString();
    
    // 更新當前階段
    if (stage === 1) currentStage = 1;
    else if (stage === 2) currentStage = 2;
    else if (stage === 3) currentStage = 3;
    else if (stage === '4a') currentStage = 4;
    else if (stage === '5a') currentStage = 5;
    else if (stage === '4b') currentStage = 4;
    else if (stage === 6) currentStage = 6;
    else if (stage === 7) currentStage = 7;
    
    currentRecord.rtv_data.current_stage = currentStage;
    
    saveRTVData();
    updateAllStages();
    
    if (stage === 7) {
        updateStatus(lang.statusCompleted);
        confetti();
    }
}

function resetProcess() {
    const lang = langDict[currentLang];
    if (!confirm(lang.confirmReset)) return;
    
    currentRecord.rtv_data = {
        current_stage: 0,
        selected_route: null,
        tracking_number: '',
        stage_completion: {},
        completion_dates: {}
    };
    currentStage = 0;
    selectedRoute = null;
    getEl('tracking-number').value = '';
    saveRTVData();
    updateAllStages();
    updateStatus(lang.statusReady);
}

function updateAllStages() {
    const completion = currentRecord.rtv_data.stage_completion;
    const lang = langDict[currentLang];
    
    // 計算總階段數
    let totalStages = 7; // 基礎階段數
    if (selectedRoute === 'express') totalStages = 7; // 1,2,3,4a,5a,6,7
    else if (selectedRoute === 'return') totalStages = 6; // 1,2,3,4b,6,7
    else totalStages = 3; // 只有前3個階段
    
    const completedCount = Object.values(completion).filter(v => v).length;
    const progressPercentage = totalStages > 0 ? Math.round((completedCount / totalStages) * 100) : 0;
    getEl('progress-percentage').textContent = progressPercentage + '%';
    
    // 隱藏/顯示相關階段
    document.querySelectorAll('.timeline-item[data-route]').forEach(item => {
        item.classList.add('hidden-stage');
    });
    
    // 根據選擇的路線顯示對應階段
    if (selectedRoute === 'express') {
        getEl('stage-4a').classList.remove('hidden-stage');
        getEl('stage-5a').classList.remove('hidden-stage');
        getEl('stage-6').classList.remove('hidden-stage');
        getEl('stage-7').classList.remove('hidden-stage');
    } else if (selectedRoute === 'return') {
        getEl('stage-4b').classList.remove('hidden-stage');
        getEl('stage-6').classList.remove('hidden-stage');
        getEl('stage-7').classList.remove('hidden-stage');
    }
    
    // 更新每個階段的狀態
    updateStageStatus('stage-1', 1, completion, lang);
    updateStageStatus('stage-2', 2, completion, lang);
    updateStageStatus('stage-3', 3, completion, lang);
    
    if (selectedRoute === 'express') {
        updateStageStatus('stage-4a', 4, completion, lang);
        updateStageStatus('stage-5a', 5, completion, lang);
        updateStageStatus('stage-6', 6, completion, lang);
        updateStageStatus('stage-7', 7, completion, lang);
    } else if (selectedRoute === 'return') {
        updateStageStatus('stage-4b', 4, completion, lang);
        updateStageStatus('stage-6', 6, completion, lang);
        updateStageStatus('stage-7', 7, completion, lang);
    }
    
    // 禁用/啟用路線選擇
    if (currentStage >= 3) {
        document.querySelectorAll('.route-option').forEach(opt => {
            opt.style.pointerEvents = 'none';
            opt.style.opacity = '0.6';
        });
    }
}

function updateStageStatus(stageId, stageNum, completion, lang) {
    const stageEl = getEl(stageId);
    if (!stageEl) return;
    
    const badgeEl = getEl(stageId + '-badge');
    const stageKey = 'stage' + (stageId.includes('a') || stageId.includes('b') ? stageId.split('-')[1] : stageNum);
    
    stageEl.classList.remove('pending', 'active', 'completed');
    
    if (completion[stageKey]) {
        stageEl.classList.add('completed');
        badgeEl.textContent = lang.statusDone;
        badgeEl.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-blue-200 text-blue-700';
    } else if (currentStage === stageNum - 1 || (stageNum === 3 && currentStage === 2)) {
        stageEl.classList.add('active');
        badgeEl.textContent = lang.statusInProgress;
        badgeEl.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-green-200 text-green-700';
    } else {
        stageEl.classList.add('pending');
        badgeEl.textContent = lang.statusPending;
        badgeEl.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-700';
    }
}

function setupEventListeners() {
    getEl('lang-selector').addEventListener('change', (e) => {
        currentLang = e.target.value;
        applyLanguage();
    });
    getEl('save-btn').addEventListener('click', saveRTVData);
    getEl('reset-btn').addEventListener('click', resetProcess);
    getEl('print-btn').addEventListener('click', () => window.print());
    
    const trackingField = getEl('tracking-number');
    if (trackingField) trackingField.addEventListener('blur', () => saveRTVData());
}

function applyLanguage() {
    const lang = langDict[currentLang];
    getEl('page-title').textContent = lang.pageTitle;
    getEl('btn-back').textContent = lang.btnBack;
    getEl('section-basic').textContent = lang.sectionBasic;
    getEl('section-timeline').textContent = lang.sectionTimeline;
    getEl('progress-text').innerHTML = lang.progressText + '：<span id="progress-percentage" class="font-bold text-indigo-600">' + getEl('progress-percentage').textContent + '</span>';
    
    // 更新所有階段標題
    const stages = ['1', '2', '3', '4a', '5a', '4b', '6', '7'];
    stages.forEach(s => {
        const titleEl = getEl('stage-' + s + '-title');
        const descEl = getEl('stage-' + s + '-desc');
        if (titleEl) titleEl.textContent = lang['stage' + s + 'Title'];
        if (descEl) descEl.textContent = lang['stage' + s + 'Desc'];
    });
    
    getEl('route-express-label').textContent = lang.routeExpressLabel;
    getEl('route-return-label').textContent = lang.routeReturnLabel;
    getEl('label-tracking').textContent = lang.labelTracking;
    
    updateAllStages();
    lucide.createIcons();
}

function updateStatus(message, clearAfterMs = 3000) {
    const statusBar = getEl('status-bar');
    statusBar.textContent = message;
    if (window.statusTimeout) clearTimeout(window.statusTimeout);
    if (clearAfterMs > 0) {
        window.statusTimeout = setTimeout(() => {
            statusBar.textContent = langDict[currentLang].statusReady;
        }, clearAfterMs);
    }
}

function confetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];
    const confettiCount = 50;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);
        const fallDuration = 2000 + Math.random() * 1000;
        const horizontalMovement = (Math.random() - 0.5) * 200;
        confetti.animate([
            { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
            { transform: 'translate(' + horizontalMovement + 'px, ' + (window.innerHeight + 10) + 'px) rotate(' + (Math.random() * 720) + 'deg)', opacity: 0 }
        ], {
            duration: fallDuration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => confetti.remove();
    }
}

window.completeStage = completeStage;
window.selectRoute = selectRoute;
window.resetProcess = resetProcess;
