const langDict = {
    '繁體中文': {
        'stage1Title': 'Kick Off',
        'stage2Title': '已離廠',
        'stage3Title': '選擇運送方式',
        'stage4aTitle': '輸入快遞單號',
        'stage5aTitle': '已抵達廠商端',
        'stage4bTitle': '已抵達廠商端',
        'stage6Title': 'FA進行中',
        'stage7Title': 'FA已完成',
        'stage1Desc': 'RTV 流程啟動',
        'stage2Desc': '物料已離開工廠',
        'stage3Desc': '請選擇快遞或退運',
        'stage4aDesc': '請輸入快遞追蹤單號',
        'stage5aDesc': '物料已送達廠商 (快遞)',
        'stage4bDesc': '物料已送達廠商 (退運)',
        'stage6Desc': '廠商正在進行失效分析',
        'stage7Desc': '失效分析報告已完成',
        'statusCompleted': '已完成',
        'statusActive': '進行中',
        'statusPending': '待處理',
        'btnComplete': '完成此階段',
        'completionTime': '完成時間',
        'routeExpress': '快遞',
        'routeReturn': '退運'
    }
};

let currentLang = '繁體中文';
let currentRecord = null;
let recordId = null;
let currentStage = 0;
let selectedRoute = null;

function formatDateTime(isoString) {
    if (!isoString) return '-';
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    recordId = urlParams.get('id');
    if (!recordId) {
        alert('錯誤：未指定記錄 ID！');
        window.location.href = 'index.html';
        return;
    }
    loadRecord();
    renderTimeline();
    lucide.createIcons();
});

function loadRecord() {
    const storedRecords = localStorage.getItem('iqcRecords');
    if (!storedRecords) {
        setTimeout(() => window.location.href = 'index.html', 2000);
        return;
    }
    const records = JSON.parse(storedRecords);
    currentRecord = records.find(r => r.id === parseInt(recordId));
    if (!currentRecord) {
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
    
    document.getElementById('display-qpn').textContent = currentRecord.qpn || '-';
    document.getElementById('display-sn').textContent = currentRecord.sn || '-';
    document.getElementById('display-dept').textContent = currentRecord.dept || '-';
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    const lang = langDict[currentLang];
    
    const stages = [
        { id: 1, icon: 'rocket', title: lang.stage1Title, desc: lang.stage1Desc },
        { id: 2, icon: 'package-open', title: lang.stage2Title, desc: lang.stage2Desc },
        { id: 3, icon: 'git-branch', title: lang.stage3Title, desc: lang.stage3Desc, isRoute: true }
    ];
    
    if (selectedRoute === 'express') {
        stages.push(
            { id: '4a', icon: 'truck', title: lang.stage4aTitle, desc: lang.stage4aDesc, needsInput: true },
            { id: '5a', icon: 'map-pin', title: lang.stage5aTitle, desc: lang.stage5aDesc },
            { id: 6, icon: 'microscope', title: lang.stage6Title, desc: lang.stage6Desc },
            { id: 7, icon: 'check-circle', title: lang.stage7Title, desc: lang.stage7Desc }
        );
    } else if (selectedRoute === 'return') {
        stages.push(
            { id: '4b', icon: 'map-pin', title: lang.stage4bTitle, desc: lang.stage4bDesc },
            { id: 6, icon: 'microscope', title: lang.stage6Title, desc: lang.stage6Desc },
            { id: 7, icon: 'check-circle', title: lang.stage7Title, desc: lang.stage7Desc }
        );
    }
    
    container.innerHTML = '<div class="timeline-line"><div class="timeline-line-progress" id="timeline-progress" style="width: 0%"></div></div>';
    
    stages.forEach((stage, index) => {
        const node = createNode(stage, index, stages.length);
        container.appendChild(node);
    });
    
    updateProgress();
    lucide.createIcons();
}

function createNode(stage, index, total) {
    const nodeDiv = document.createElement('div');
    const stageKey = 'stage' + stage.id;
    const isCompleted = currentRecord.rtv_data.stage_completion[stageKey];
    const isActive = !isCompleted && (
        (typeof stage.id === 'number' && currentStage === stage.id - 1) ||
        (stage.id === 3 && currentStage === 2) ||
        (stage.id === '4a' && currentStage === 3) ||
        (stage.id === '4b' && currentStage === 3)
    );
    
    nodeDiv.className = `timeline-node-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`;
    
    let content = `
        ${isCompleted && currentRecord.rtv_data.completion_dates[stageKey] ? `
            <div class="completion-time-above">
                <i data-lucide="clock"></i>
                <span>${formatDateTime(currentRecord.rtv_data.completion_dates[stageKey])}</span>
            </div>
        ` : ''}
        
        <div class="node-circle"></div>
        
        <div class="node-content">
            <div class="node-header">
                <i data-lucide="${stage.icon}" class="node-icon"></i>
                <span class="node-title">${stage.title}</span>
                <span class="node-status-badge ${isCompleted ? 'completed' : isActive ? 'active' : 'pending'}">
                    ${isCompleted ? langDict[currentLang].statusCompleted : isActive ? langDict[currentLang].statusActive : langDict[currentLang].statusPending}
                </span>
            </div>
            
            <div class="node-description">${stage.desc}</div>
    `;
    
    if (stage.isRoute && !selectedRoute) {
        content += `
            <div class="route-selection-container">
                <div class="route-option-box" onclick="window.selectRoute('express')">
                    <i data-lucide="truck"></i>
                    <span class="route-option-label">${langDict[currentLang].routeExpress}</span>
                </div>
                <div class="route-option-box" onclick="window.selectRoute('return')">
                    <i data-lucide="package-x"></i>
                    <span class="route-option-label">${langDict[currentLang].routeReturn}</span>
                </div>
            </div>
        `;
    } else if (stage.needsInput) {
        content += `
            <input type="text" id="tracking-number" class="tracking-input" placeholder="請輸入快遞單號" value="${currentRecord.rtv_data.tracking_number || ''}">
        `;
    }
    
    if (!isCompleted && (isActive || stage.isRoute)) {
        content += `
            <button class="node-button" onclick="window.completeStage(${typeof stage.id === 'string' ? "'" + stage.id + "'" : stage.id})">
                <i data-lucide="check"></i>
                ${langDict[currentLang].btnComplete}
            </button>
        `;
    }
    
    if (isCompleted && currentRecord.rtv_data.completion_dates[stageKey]) {
        content += `
            <div class="completion-time-box">
                <i data-lucide="clock"></i>
                <span class="completion-time-label">${langDict[currentLang].completionTime}</span>
                <span class="completion-time-value">${formatDateTime(currentRecord.rtv_data.completion_dates[stageKey])}</span>
            </div>
        `;
    }
    
    content += '</div>';
    nodeDiv.innerHTML = content;
    
    return nodeDiv;
}

function updateProgress() {
    const completion = currentRecord.rtv_data.stage_completion;
    let totalStages = 3;
    if (selectedRoute === 'express') totalStages = 7;
    else if (selectedRoute === 'return') totalStages = 6;
    
    const completedCount = Object.values(completion).filter(v => v).length;
    const percentage = totalStages > 0 ? Math.round((completedCount / totalStages) * 100) : 0;
    
    document.getElementById('progress-percentage').textContent = percentage + '%';
    document.getElementById('timeline-progress').style.width = percentage + '%';
}

window.completeStage = function(stage) {
    const lang = langDict[currentLang];
    
    if (stage === 3 && !selectedRoute) {
        alert('⚠️ 請先選擇運送方式！');
        return;
    }
    
    if (stage === '4a') {
        const trackingNumber = document.getElementById('tracking-number').value.trim();
        if (!trackingNumber) {
            alert('⚠️ 請輸入快遞單號！');
            return;
        }
        currentRecord.rtv_data.tracking_number = trackingNumber;
    }
    
    const now = new Date().toISOString();
    const stageKey = 'stage' + stage;
    currentRecord.rtv_data.stage_completion[stageKey] = true;
    currentRecord.rtv_data.completion_dates[stageKey] = now;
    
    if (stage === 1) currentStage = 1;
    else if (stage === 2) currentStage = 2;
    else if (stage === 3) currentStage = 3;
    else if (stage === '4a' || stage === '4b') currentStage = 4;
    else if (stage === '5a') currentStage = 5;
    else if (stage === 6) currentStage = 6;
    else if (stage === 7) currentStage = 7;
    
    currentRecord.rtv_data.current_stage = currentStage;
    
    saveRTVData();
    renderTimeline();
    
    if (stage === 7) {
        alert('🎉 流程已完成！');
    }
};

window.selectRoute = function(route) {
    if (currentStage >= 3) return;
    selectedRoute = route;
    currentRecord.rtv_data.selected_route = route;
    setTimeout(() => {
        window.completeStage(3);
    }, 300);
};

window.saveRTVData = function() {
    const storedRecords = localStorage.getItem('iqcRecords');
    const records = JSON.parse(storedRecords);
    const index = records.findIndex(r => r.id === parseInt(recordId));
    if (index > -1) {
        records[index] = currentRecord;
        localStorage.setItem('iqcRecords', JSON.stringify(records));
        alert('✅ 更改已保存！');
    }
};

window.resetProcess = function() {
    if (!confirm('確定要重置整個流程嗎？')) return;
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
    renderTimeline();
};
