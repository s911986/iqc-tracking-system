let currentRecord = null;
let recordId = null;
let currentStage = 0;
let selectedRoute = null;

const stages = {
    1: { icon: 'rocket', title: 'Kick Off' },
    2: { icon: 'package-open', title: '已離廠' },
    3: { icon: 'git-branch', title: '選擇運送方式', isRoute: true },
    '4a': { icon: 'truck', title: '快遞單號', needsInput: true, route: 'express' },
    '5a': { icon: 'map-pin', title: '已抵達廠商端', route: 'express' },
    '4b': { icon: 'map-pin', title: '已抵達廠商端', route: 'return' },
    6: { icon: 'microscope', title: 'FA進行中' },
    7: { icon: 'check-circle', title: 'FA已完成' }
};

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

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    recordId = urlParams.get('id');
    if (!recordId) {
        alert('錯誤：未指定記錄 ID！');
        window.location.href = 'index.html';
        return;
    }
    loadRecord();
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
    const container = document.getElementById('timeline-track');
    
    // 清空但保留背景線
    const line = container.querySelector('.timeline-line');
    container.innerHTML = '';
    if (line) container.appendChild(line);
    
    // 確定要顯示的階段
    const visibleStages = [1, 2, 3];
    
    if (selectedRoute === 'express') {
        visibleStages.push('4a', '5a', 6, 7);
    } else if (selectedRoute === 'return') {
        visibleStages.push('4b', 6, 7);
    } else {
        // 如果還沒選擇路線，顯示佔位符
        visibleStages.push(6, 7);
    }
    
    visibleStages.forEach(stageId => {
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
    
    // 隱藏未選擇路線時的後續階段
    if (!selectedRoute && (stageId === 6 || stageId === 7)) {
        const div = document.createElement('div');
        div.className = 'stage-item hidden-stage';
        return div;
    }
    
    // 隱藏不符合選擇路線的階段
    if (stage.route && stage.route !== selectedRoute && selectedRoute) {
        const div = document.createElement('div');
        div.className = 'stage-item hidden-stage';
        return div;
    }
    
    const stageDiv = document.createElement('div');
    stageDiv.className = 'stage-item';
    
    let html = '';
    
    // 完成時間
    if (completionDate) {
        html += `
            <div class="time-badge">
                <i data-lucide="clock"></i>
                <span>完成時間</span>
                <span style="font-family: monospace; color: #1f2937;">${formatDateTime(completionDate)}</span>
            </div>
        `;
    } else {
        html += '<div style="height: 32px;"></div>';
    }
    
    // 階段標題 + 狀態
    html += `
        <div class="stage-header-inline">
            <i data-lucide="${stage.icon}" class="stage-icon"></i>
            <span class="stage-name">${stage.title}</span>
        </div>
        <span class="status-badge ${isCompleted ? 'status-completed' : isActive ? 'status-active' : 'status-pending'}">
            ${isCompleted ? '已完成' : isActive ? '進行中' : '待處理'}
        </span>
    `;
    
    // 圓點
    html += `
        <div class="stage-dot ${isCompleted ? 'dot-completed' : isActive ? 'dot-active' : 'dot-pending'}"></div>
    `;
    
    // 路線選擇
    if (stage.isRoute && !selectedRoute && isActive) {
        html += `
            <div class="route-buttons">
                <button class="route-btn" onclick="selectRoute('express')">
                    <i data-lucide="truck" style="color: #6366f1;"></i>
                    <span style="font-size: 0.875rem;">快遞</span>
                </button>
                <button class="route-btn" onclick="selectRoute('return')">
                    <i data-lucide="package-x" style="color: #f97316;"></i>
                    <span style="font-size: 0.875rem;">退運</span>
                </button>
            </div>
        `;
    }
    
    // 輸入框
    if (stage.needsInput && isActive) {
        html += `
            <input type="text" id="tracking-number" class="tracking-input" 
                   placeholder="輸入快遞單號" 
                   value="${currentRecord.rtv_data.tracking_number || ''}">
        `;
    }
    
    // 按鈕
    if (isActive && !stage.isRoute) {
        html += `
            <div class="stage-action">
                <button class="btn-complete" onclick="completeStage(${typeof stageId === 'string' ? "'" + stageId + "'" : stageId})">
                    完成此階段
                </button>
            </div>
        `;
    }
    
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
}

window.completeStage = function(stage) {
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
    
    const stageKey = 'stage' + stage;
    currentRecord.rtv_data.stage_completion[stageKey] = true;
    currentRecord.rtv_data.completion_dates[stageKey] = new Date().toISOString();
    
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
        setTimeout(() => alert('🎉 流程已完成！'), 500);
    }
};

window.selectRoute = function(route) {
    if (currentStage >= 3) return;
    selectedRoute = route;
    currentRecord.rtv_data.selected_route = route;
    setTimeout(() => completeStage(3), 300);
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
    renderAllStages();
};
