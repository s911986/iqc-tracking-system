let currentRecord = null;
let recordId = null;
let currentStage = 0;
let selectedRoute = null;

const stages = {
    1: { icon: 'rocket', title: 'Kick Off' },
    2: { icon: 'package-open', title: '已離廠' },
    3: { icon: 'git-branch', title: '選擇運送方式', titleExpress: '快遞', titleReturn: '退運', isRoute: true },
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
    const container = document.getElementById('timeline-container');
    const line = container.querySelector('.connecting-line');
    container.innerHTML = '';
    if (line) container.appendChild(line);
    
    let allStages = [1, 2, 3];
    
    if (selectedRoute === 'express') {
        allStages = [1, 2, 3, '4a', '5a', 6, 7];
    } else if (selectedRoute === 'return') {
        allStages = [1, 2, 3, '4b', 6, 7];
    } else {
        allStages = [1, 2, 3, '4a', '5a', 6, 7];
    }
    
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
    
    // 判斷狀態類別
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
                <span class="stage-title">${stage.title}</span>
            </div>
            <div class="stage-dot dot-pending"></div>
            <span class="status-badge badge-pending">待處理</span>
        `;
        return div;
    }
    
    const stageDiv = document.createElement('div');
    stageDiv.className = `stage-node ${statusClass}`;
    
    let html = '';
    
    // 完成時間
    if (completionDate) {
        html += `
            <div class="completion-time">
                <i data-lucide="clock"></i>
                <span>完成時間</span>
                <span class="time-value">${formatDateTime(completionDate)}</span>
            </div>
        `;
    }
    
    // 階段標題（選擇運送方式後，顯示實際選擇的方式）
    let displayTitle = stage.title;
    if (stageId === 3 && selectedRoute) {
        displayTitle = selectedRoute === 'express' ? stage.titleExpress : stage.titleReturn;
    }
    
    html += `
        <div class="stage-header">
            <i data-lucide="${stage.icon}" class="stage-icon"></i>
            <span class="stage-title">${displayTitle}</span>
        </div>
    `;
    
    // 圓點
    html += `
        <div class="stage-dot ${isCompleted ? 'dot-completed' : isActive ? 'dot-active' : 'dot-pending'}"></div>
    `;
    
    // 狀態標籤
    html += `
        <span class="status-badge ${isCompleted ? 'badge-completed' : isActive ? 'badge-active' : 'badge-pending'}">
            ${isCompleted ? '已完成' : isActive ? '進行中' : '待處理'}
        </span>
    `;
    
    // 動作區域
    html += '<div class="action-area">';
    
    // 顯示快遞單號（如果已完成且有單號）
    if (stageId === '4a' && isCompleted && currentRecord.rtv_data.tracking_number) {
        html += `
            <div class="tracking-display">
                快遞單號: ${currentRecord.rtv_data.tracking_number}
            </div>
        `;
    }
    
    // 路線選擇
    if (stage.isRoute && !selectedRoute && isActive) {
        html += `
            <div class="route-selection">
                <button class="route-option" onclick="selectRoute('express')">
                    <i data-lucide="truck" style="color: #6366f1;"></i>
                    <span>快遞</span>
                </button>
                <button class="route-option" onclick="selectRoute('return')">
                    <i data-lucide="package-x" style="color: #f97316;"></i>
                    <span>退運</span>
                </button>
            </div>
        `;
    }
    
    // 輸入框
    if (stage.needsInput && isActive && !isCompleted) {
        html += `
            <input type="text" id="tracking-number" class="tracking-input" 
                   placeholder="輸入快遞單號" 
                   value="${currentRecord.rtv_data.tracking_number || ''}">
        `;
    }
    
    // 完成按鈕
    if (isActive && !stage.isRoute && !isCompleted) {
        html += `
            <button class="complete-button" onclick="completeStage(${typeof stageId === 'string' ? "'" + stageId + "'" : stageId})">
                完成此階段
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
