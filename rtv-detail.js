let currentRecord = null;
let recordId = null;
let currentStage = 0;
let selectedRoute = null;

const stages = {
    1: { icon: 'rocket', title: 'Kick Off' },
    2: { icon: 'package-open', title: '已離廠' },
    3: { icon: 'git-branch', title: '選擇運送方式', isRoute: true },
    '4a': { icon: 'truck', title: '輸入快遞單號', needsInput: true },
    '5a': { icon: 'map-pin', title: '已抵達廠商端' },
    '4b': { icon: 'map-pin', title: '已抵達廠商端' },
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
    console.log('🚀 頁面載入完成');
    
    const urlParams = new URLSearchParams(window.location.search);
    recordId = urlParams.get('id');
    
    console.log('📋 記錄 ID:', recordId);
    
    if (!recordId) {
        console.error('❌ 未找到記錄 ID！');
        alert('錯誤：未指定記錄 ID！');
        window.location.href = 'index.html';
        return;
    }
    
    loadRecord();
    render();
    lucide.createIcons();
});

function loadRecord() {
    console.log('📂 載入記錄...');
    
    const storedRecords = localStorage.getItem('iqcRecords');
    console.log('💾 localStorage 數據:', storedRecords);
    
    if (!storedRecords) {
        console.error('❌ localStorage 中沒有記錄！');
        alert('找不到任何記錄，返回主頁');
        window.location.href = 'index.html';
        return;
    }
    
    const records = JSON.parse(storedRecords);
    console.log('📊 所有記錄:', records);
    
    currentRecord = records.find(r => r.id === parseInt(recordId));
    console.log('🎯 當前記錄:', currentRecord);
    
    if (!currentRecord) {
        console.error('❌ 找不到 ID 為', recordId, '的記錄');
        alert('找不到此記錄，返回主頁');
        window.location.href = 'index.html';
        return;
    }
    
    // 初始化 RTV 數據
    if (!currentRecord.rtv_data) {
        console.log('🆕 初始化 RTV 數據');
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
    
    console.log('✅ 當前階段:', currentStage);
    console.log('✅ 選擇的路線:', selectedRoute);
    
    // 顯示基本信息
    document.getElementById('display-qpn').textContent = currentRecord.qpn || '-';
    document.getElementById('display-sn').textContent = currentRecord.sn || '-';
    document.getElementById('display-dept').textContent = currentRecord.dept || '-';
}

function render() {
    console.log('🎨 渲染頁面...');
    
    const container = document.getElementById('current-stage-container');
    
    if (!container) {
        console.error('❌ 找不到容器元素 #current-stage-container');
        return;
    }
    
    const activeStageId = getActiveStage();
    console.log('🎯 活動階段 ID:', activeStageId);
    
    if (!activeStageId) {
        console.log('🎉 所有階段已完成！');
        container.innerHTML = '<div class="bg-white p-8 rounded-xl shadow-sm text-center text-gray-500 text-lg">所有階段已完成！🎉</div>';
        updateProgress();
        return;
    }
    
    const stage = stages[activeStageId];
    console.log('📌 當前階段配置:', stage);
    
    const stageKey = 'stage' + activeStageId;
    const completionDate = currentRecord.rtv_data.completion_dates[stageKey];
    
    let html = `
        <div class="bg-white p-8 rounded-xl shadow-sm">
            <!-- 完成時間 -->
            ${completionDate ? `
                <div class="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <i data-lucide="clock" class="w-4 h-4"></i>
                    <span>完成時間</span>
                    <span class="font-mono text-gray-800">${formatDateTime(completionDate)}</span>
                </div>
            ` : ''}
            
            <!-- 階段名稱 + 狀態 -->
            <div class="flex items-center gap-3 mb-6">
                <i data-lucide="${stage.icon}" class="w-6 h-6 text-indigo-600"></i>
                <span class="text-xl font-semibold text-gray-800">${stage.title}</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">進行中</span>
            </div>
            
            <!-- 進度條 + 動畫圓點 -->
            <div class="progress-bar">
                <div class="progress-fill" style="width: 0%"></div>
                <div class="progress-dot" style="left: 0%"></div>
            </div>
    `;
    
    // 路線選擇
    if (stage.isRoute && !selectedRoute) {
        html += `
            <div class="flex gap-4 justify-center mb-6">
                <button onclick="selectRoute('express')" class="px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition flex flex-col items-center gap-2">
                    <i data-lucide="truck" class="w-8 h-8 text-indigo-600"></i>
                    <span class="font-medium">快遞</span>
                </button>
                <button onclick="selectRoute('return')" class="px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition flex flex-col items-center gap-2">
                    <i data-lucide="package-x" class="w-8 h-8 text-orange-600"></i>
                    <span class="font-medium">退運</span>
                </button>
            </div>
        `;
    }
    
    // 輸入框
    if (stage.needsInput) {
        html += `
            <input type="text" id="tracking-number" placeholder="請輸入快遞單號" 
                   value="${currentRecord.rtv_data.tracking_number || ''}"
                   class="w-full px-4 py-3 mb-6 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none">
        `;
    }
    
    // 紫藍色按鈕
    if (!stage.isRoute) {
        html += `
            <div class="flex justify-center">
                <button class="btn-primary" onclick="completeStage(${typeof activeStageId === 'string' ? "'" + activeStageId + "'" : activeStageId})">
                    完成此階段
                </button>
            </div>
        `;
    }
    
    html += '</div>';
    
    container.innerHTML = html;
    console.log('✅ HTML 已注入');
    
    updateProgress();
    lucide.createIcons();
    
    // 動畫圓點到終點
    setTimeout(() => {
        const dot = document.querySelector('.progress-dot');
        const fill = document.querySelector('.progress-fill');
        if (dot && fill) {
            dot.style.left = '100%';
            fill.style.width = '100%';
            console.log('✅ 圓點動畫已啟動');
        }
    }, 100);
}

function getActiveStage() {
    const stageOrder = [1, 2, 3];
    if (selectedRoute === 'express') {
        stageOrder.push('4a', '5a', 6, 7);
    } else if (selectedRoute === 'return') {
        stageOrder.push('4b', 6, 7);
    }
    
    console.log('🔍 階段順序:', stageOrder);
    
    for (let stageId of stageOrder) {
        const stageKey = 'stage' + stageId;
        if (!currentRecord.rtv_data.stage_completion[stageKey]) {
            console.log('✅ 找到活動階段:', stageId);
            return stageId;
        }
    }
    
    console.log('ℹ️ 沒有活動階段（全部完成）');
    return null;
}

function updateProgress() {
    const completion = currentRecord.rtv_data.stage_completion;
    let total = selectedRoute === 'express' ? 7 : selectedRoute === 'return' ? 6 : 3;
    const completed = Object.values(completion).filter(v => v).length;
    const percent = Math.round((completed / total) * 100);
    
    console.log(`📊 進度: ${completed}/${total} = ${percent}%`);
    
    document.getElementById('progress-percentage').textContent = percent + '%';
}

window.completeStage = function(stage) {
    console.log('✅ 完成階段:', stage);
    
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
    render();
    
    if (stage === 7) {
        setTimeout(() => alert('🎉 流程已完成！'), 500);
    }
};

window.selectRoute = function(route) {
    console.log('🚚 選擇路線:', route);
    if (currentStage >= 3) return;
    selectedRoute = route;
    currentRecord.rtv_data.selected_route = route;
    setTimeout(() => completeStage(3), 300);
};

window.saveRTVData = function() {
    console.log('💾 保存數據...');
    const storedRecords = localStorage.getItem('iqcRecords');
    const records = JSON.parse(storedRecords);
    const index = records.findIndex(r => r.id === parseInt(recordId));
    if (index > -1) {
        records[index] = currentRecord;
        localStorage.setItem('iqcRecords', JSON.stringify(records));
        console.log('✅ 數據已保存');
        alert('✅ 更改已保存！');
    }
};

window.resetProcess = function() {
    if (!confirm('確定要重置整個流程嗎？')) return;
    console.log('🔄 重置流程');
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
    render();
};

// 暴露調試函數
window.getActiveStage = getActiveStage;
