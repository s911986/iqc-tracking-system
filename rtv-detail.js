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
        'labelRequester': '申請人員',
        'labelResult': '測試結果',
        'labelTime': '建立時間',
        'stage1Title': '簽核中',
        'stage1Desc': 'RTV 申請文件簽核審批中',
        'stage2Title': '放行中',
        'stage2Desc': '簽核完成，準備放行物料',
        'stage3Title': '已交給FAE',
        'stage3Desc': '物料已移交給 FAE 處理',
        'stage4Title': '快遞單號生成中',
        'stage4Desc': '系統正在生成快遞追蹤單號',
        'stage5Title': '快遞單號',
        'stage5Desc': '請輸入快遞追蹤單號',
        'stage6Title': '已抵達廠商端',
        'stage6Desc': '物料已送達廠商',
        'stage7Title': 'FA進行中',
        'stage7Desc': '廠商正在進行失效分析',
        'stage8Title': 'FA結果已提交',
        'stage8Desc': '最終 FA 分析報告已完成',
        'labelTracking': '快遞單號',
        'labelFAStatus': 'FA 狀態/單號',
        'labelFAResult': 'FA 結果',
        'trackingDisplay': '快遞單號',
        'btnComplete': '完成此階段',
        'btnComplete5': '確認單號並繼續',
        'btnComplete8': '完成整個流程',
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
        'pleaseEnterFAResult': '⚠️ 請輸入 FA 結果！',
        'confirmReset': '確定要重置整個流程嗎？這將清除所有進度。',
        'language': '語言'
    },
    'English': {
        'pageTitle': 'RTV Details',
        'btnBack': 'Back to Main',
        'sectionBasic': 'Basic Information',
        'sectionTimeline': 'RTV Process Tracking',
        'progressText': 'Progress',
        'labelQPN': 'QPN',
        'labelSN': 'SN',
        'labelDept': 'Department',
        'labelRequester': 'Requester',
        'labelResult': 'Test Result',
        'labelTime': 'Created Time',
        'stage1Title': 'Approval in Progress',
        'stage1Desc': 'RTV application under approval',
        'stage2Title': 'Release in Progress',
        'stage2Desc': 'Approval completed, preparing release',
        'stage3Title': 'Handed over to FAE',
        'stage3Desc': 'Material handed over to FAE',
        'stage4Title': 'Generating Tracking Number',
        'stage4Desc': 'System generating tracking number',
        'stage5Title': 'Tracking Number',
        'stage5Desc': 'Please enter tracking number',
        'stage6Title': 'Arrived at Vendor',
        'stage6Desc': 'Material arrived at vendor',
        'stage7Title': 'FA in Progress',
        'stage7Desc': 'Vendor conducting failure analysis',
        'stage8Title': 'FA Result Submitted',
        'stage8Desc': 'Final FA report completed',
        'labelTracking': 'Tracking Number',
        'labelFAStatus': 'FA Status/Tracking#',
        'labelFAResult': 'FA Result',
        'trackingDisplay': 'Tracking Number',
        'btnComplete': 'Complete This Stage',
        'btnComplete5': 'Confirm & Continue',
        'btnComplete8': 'Complete Process',
        'btnReset': 'Reset Process',
        'btnCancel': 'Cancel',
        'btnSave': 'Save Changes',
        'btnPrint': 'Print Report',
        'statusReady': 'Ready.',
        'statusSaved': '✅ Changes saved!',
        'statusCompleted': '🎉 Process completed!',
        'statusPending': 'Pending',
        'statusInProgress': 'In Progress',
        'statusDone': 'Completed',
        'recordNotFound': '❌ Record not found!',
        'pleaseEnterTracking': '⚠️ Please enter tracking number!',
        'pleaseEnterFAResult': '⚠️ Please enter FA result!',
        'confirmReset': 'Reset the entire process? This will clear all progress.',
        'language': 'Language'
    },
    'Tiếng Việt': {
        'pageTitle': 'Chi tiết RTV',
        'btnBack': 'Quay lại',
        'sectionBasic': 'Thông tin cơ bản',
        'sectionTimeline': 'Theo dõi quy trình',
        'progressText': 'Tiến độ',
        'labelQPN': 'QPN',
        'labelSN': 'SN',
        'labelDept': 'Bộ phận',
        'labelRequester': 'Người yêu cầu',
        'labelResult': 'Kết quả',
        'labelTime': 'Thời gian tạo',
        'stage1Title': 'Đang phê duyệt',
        'stage1Desc': 'Đơn RTV đang được phê duyệt',
        'stage2Title': 'Đang phát hành',
        'stage2Desc': 'Phê duyệt hoàn tất',
        'stage3Title': 'Đã giao cho FAE',
        'stage3Desc': 'Vật liệu đã chuyển giao',
        'stage4Title': 'Đang tạo số theo dõi',
        'stage4Desc': 'Hệ thống đang tạo số',
        'stage5Title': 'Số theo dõi',
        'stage5Desc': 'Nhập số theo dõi',
        'stage6Title': 'Đã đến nhà cung cấp',
        'stage6Desc': 'Vật liệu đã đến',
        'stage7Title': 'FA đang tiến hành',
        'stage7Desc': 'Đang phân tích lỗi',
        'stage8Title': 'Kết quả FA đã gửi',
        'stage8Desc': 'Báo cáo hoàn thành',
        'labelTracking': 'Số theo dõi',
        'labelFAStatus': 'Trạng thái FA',
        'labelFAResult': 'Kết quả FA',
        'trackingDisplay': 'Số theo dõi',
        'btnComplete': 'Hoàn thành giai đoạn',
        'btnComplete5': 'Xác nhận & Tiếp tục',
        'btnComplete8': 'Hoàn thành quy trình',
        'btnReset': 'Đặt lại',
        'btnCancel': 'Hủy',
        'btnSave': 'Lưu thay đổi',
        'btnPrint': 'In báo cáo',
        'statusReady': 'Sẵn sàng.',
        'statusSaved': '✅ Đã lưu!',
        'statusCompleted': '🎉 Hoàn thành!',
        'statusPending': 'Đang chờ',
        'statusInProgress': 'Đang tiến hành',
        'statusDone': 'Hoàn thành',
        'recordNotFound': '❌ Không tìm thấy!',
        'pleaseEnterTracking': '⚠️ Nhập số theo dõi!',
        'pleaseEnterFAResult': '⚠️ Nhập kết quả FA!',
        'confirmReset': 'Đặt lại toàn bộ quy trình?',
        'language': 'Ngôn ngữ'
    }
};

let currentLang = '繁體中文';
let currentRecord = null;
let recordId = null;
let currentStage = 0;

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
            tracking_number: '',
            fa_status: '',
            fa_result: '',
            stage_completion: {
                stage1: false, stage2: false, stage3: false, stage4: false,
                stage5: false, stage6: false, stage7: false, stage8: false
            },
            completion_dates: {}
        };
    }
    currentStage = currentRecord.rtv_data.current_stage || 0;
    displayRecordInfo();
    loadRTVData();
    updateAllStages();
}

function displayRecordInfo() {
    getEl('display-qpn').textContent = currentRecord.qpn || '-';
    getEl('display-sn').textContent = currentRecord.sn || '-';
    getEl('display-dept').textContent = currentRecord.dept || '-';
    getEl('display-requester').textContent = currentRecord.requester || '-';
    getEl('display-result').textContent = currentRecord.result || '-';
    getEl('display-time').textContent = currentRecord.timestamp || '-';
}

function loadRTVData() {
    const data = currentRecord.rtv_data || {};
    if (data.tracking_number) {
        getEl('tracking-number').value = data.tracking_number;
        getEl('tracking-value').textContent = data.tracking_number;
    }
    getEl('fa-status').value = data.fa_status || '';
    getEl('fa-result').value = data.fa_result || '';
}

function saveRTVData() {
    const data = currentRecord.rtv_data;
    data.tracking_number = getEl('tracking-number').value;
    data.fa_status = getEl('fa-status').value;
    data.fa_result = getEl('fa-result').value;
    const storedRecords = localStorage.getItem('iqcRecords');
    const records = JSON.parse(storedRecords);
    const index = records.findIndex(r => r.id === parseInt(recordId));
    if (index > -1) {
        records[index] = currentRecord;
        localStorage.setItem('iqcRecords', JSON.stringify(records));
        updateStatus(langDict[currentLang].statusSaved);
    }
}

function completeStage(stage) {
    const lang = langDict[currentLang];
    if (stage === 5) {
        const trackingNumber = getEl('tracking-number').value.trim();
        if (!trackingNumber) {
            alert(lang.pleaseEnterTracking);
            getEl('tracking-number').focus();
            return;
        }
        getEl('tracking-value').textContent = trackingNumber;
    }
    if (stage === 8) {
        const faResult = getEl('fa-result').value.trim();
        if (!faResult) {
            alert(lang.pleaseEnterFAResult);
            getEl('fa-result').focus();
            return;
        }
    }
    currentRecord.rtv_data.stage_completion['stage' + stage] = true;
    currentRecord.rtv_data.completion_dates['stage' + stage] = new Date().toISOString();
    currentRecord.rtv_data.current_stage = stage;
    currentStage = stage;
    saveRTVData();
    updateAllStages();
    if (stage === 8) {
        updateStatus(lang.statusCompleted);
        confetti();
    }
}

function resetProcess() {
    const lang = langDict[currentLang];
    if (!confirm(lang.confirmReset)) return;
    currentRecord.rtv_data = {
        current_stage: 0,
        tracking_number: '',
        fa_status: '',
        fa_result: '',
        stage_completion: {
            stage1: false, stage2: false, stage3: false, stage4: false,
            stage5: false, stage6: false, stage7: false, stage8: false
        },
        completion_dates: {}
    };
    currentStage = 0;
    getEl('tracking-number').value = '';
    getEl('fa-status').value = '';
    getEl('fa-result').value = '';
    saveRTVData();
    updateAllStages();
    updateStatus(lang.statusReady);
}

function updateAllStages() {
    const completion = currentRecord.rtv_data.stage_completion;
    const lang = langDict[currentLang];
    const completedCount = Object.values(completion).filter(v => v).length;
    const progressPercentage = Math.round((completedCount / 8) * 100);
    getEl('progress-percentage').textContent = progressPercentage + '%';
    const progressBar = getEl('progress-bar');
    const totalHeight = document.querySelector('.timeline').offsetHeight;
    progressBar.style.height = (completedCount / 8) * totalHeight + 'px';
    for (let i = 1; i <= 8; i++) {
        const stageEl = getEl('stage-' + i);
        const badgeEl = getEl('stage-' + i + '-badge');
        stageEl.classList.remove('pending', 'active', 'completed');
        if (completion['stage' + i]) {
            stageEl.classList.add('completed');
            badgeEl.textContent = lang.statusDone;
            badgeEl.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-blue-200 text-blue-700';
        } else if (currentStage === i - 1) {
            stageEl.classList.add('active');
            badgeEl.textContent = lang.statusInProgress;
            badgeEl.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-green-200 text-green-700';
        } else {
            stageEl.classList.add('pending');
            badgeEl.textContent = lang.statusPending;
            badgeEl.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-700';
        }
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
    const fields = ['tracking-number', 'fa-status', 'fa-result'];
    fields.forEach(fieldId => {
        const el = getEl(fieldId);
        if (el) el.addEventListener('blur', () => saveRTVData());
    });
}

function applyLanguage() {
    const lang = langDict[currentLang];
    getEl('page-title').textContent = lang.pageTitle;
    getEl('btn-back').textContent = lang.btnBack;
    getEl('section-basic').textContent = lang.sectionBasic;
    getEl('section-timeline').textContent = lang.sectionTimeline;
    getEl('progress-text').innerHTML = lang.progressText + '：<span id="progress-percentage" class="font-bold text-indigo-600">' + getEl('progress-percentage').textContent + '</span>';
    getEl('label-qpn-display').innerHTML = '<i data-lucide="package" class="w-3 h-3 mr-1"></i>' + lang.labelQPN;
    getEl('label-sn-display').innerHTML = '<i data-lucide="hash" class="w-3 h-3 mr-1"></i>' + lang.labelSN;
    getEl('label-dept-display').innerHTML = '<i data-lucide="building" class="w-3 h-3 mr-1"></i>' + lang.labelDept;
    getEl('label-requester-display').innerHTML = '<i data-lucide="user" class="w-3 h-3 mr-1"></i>' + lang.labelRequester;
    getEl('label-result-display').innerHTML = '<i data-lucide="check-circle" class="w-3 h-3 mr-1"></i>' + lang.labelResult;
    getEl('label-time-display').innerHTML = '<i data-lucide="calendar" class="w-3 h-3 mr-1"></i>' + lang.labelTime;
    for (let i = 1; i <= 8; i++) {
        getEl('stage-' + i + '-title').textContent = lang['stage' + i + 'Title'];
        getEl('stage-' + i + '-desc').textContent = lang['stage' + i + 'Desc'];
    }
    getEl('label-tracking').textContent = lang.labelTracking;
    getEl('label-fa-status').textContent = lang.labelFAStatus;
    getEl('label-fa-result').textContent = lang.labelFAResult;
    getEl('tracking-display').innerHTML = '<i data-lucide="info" class="w-4 h-4 mr-2"></i>' + lang.trackingDisplay + '：<span class="font-mono font-semibold" id="tracking-value">' + getEl('tracking-value').textContent + '</span>';
    for (let i = 1; i <= 4; i++) getEl('btn-complete-' + i).textContent = lang.btnComplete;
    getEl('btn-complete-5').textContent = lang.btnComplete5;
    for (let i = 6; i <= 7; i++) getEl('btn-complete-' + i).textContent = lang.btnComplete;
    getEl('btn-complete-8').textContent = lang.btnComplete8;
    getEl('btn-reset').textContent = lang.btnReset;
    getEl('btn-cancel').textContent = lang.btnCancel;
    getEl('btn-save').textContent = lang.btnSave;
    getEl('btn-print').textContent = lang.btnPrint;
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
window.resetProcess = resetProcess;
