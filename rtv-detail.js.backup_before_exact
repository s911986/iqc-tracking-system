// rtv-detail.js - 支援橫向 timeline 與時間紀錄
const langDict = {
  '繁體中文': {
    pageTitle: 'RTV 詳細信息',
    btnBack: '返回主頁',
    sectionBasic: '基本信息',
    sectionTimeline: 'RTV 流程追蹤',
    progressText: '進度',
    labelQPN: '料號 QPN',
    labelSN: 'SN',
    labelDept: '部門',
    stage1Title: 'Kick Off',
    stage1Desc: 'RTV 流程啟動',
    stage2Title: '已離廠',
    stage2Desc: '物料已離開工廠',
    stage3Title: '選擇運送方式',
    stage3Desc: '請選擇快遞或退運',
    stage4aTitle: '輸入快遞單號',
    stage4aDesc: '請輸入快遞追蹤單號',
    stage5aTitle: '已抵達廠商端',
    stage5aDesc: '物料已送達廠商 (快遞)',
    stage4bTitle: '已抵達廠商端',
    stage4bDesc: '物料已送達廠商 (退運)',
    stage6Title: 'FA進行中',
    stage6Desc: '廠商正在進行失效分析',
    stage7Title: 'FA已完成',
    stage7Desc: '失效分析報告已完成',
    labelTracking: '快遞單號',
    routeExpressLabel: '快遞',
    routeReturnLabel: '退運',
    btnComplete: '完成此階段',
    btnComplete4a: '確認單號並繼續',
    btnComplete7: '完成整個流程',
    btnReset: '重置流程',
    btnCancel: '取消',
    btnSave: '保存更改',
    btnPrint: '列印報告',
    statusReady: '準備就緒。',
    statusSaved: '✅ 更改已保存！',
    statusCompleted: '🎉 流程已完成！',
    statusPending: '待處理',
    statusInProgress: '進行中',
    statusDone: '已完成',
    recordNotFound: '❌ 找不到記錄！',
    pleaseEnterTracking: '⚠️ 請輸入快遞單號！',
    pleaseSelectRoute: '⚠️ 請先選擇運送方式！',
    confirmReset: '確定要重置整個流程嗎？這將清除所有進度。',
    completedAt: '完成時間',
    notCompleted: '尚未完成',
    language: '語言'
  },
  'English': {
    pageTitle: 'RTV Details',
    btnBack: 'Back',
    sectionBasic: 'Basic Info',
    sectionTimeline: 'RTV Process',
    progressText: 'Progress',
    labelQPN: 'QPN',
    labelSN: 'SN',
    labelDept: 'Dept',
    stage1Title: 'Kick Off',
    stage1Desc: 'RTV process initiated',
    stage2Title: 'Departed Factory',
    stage2Desc: 'Material left factory',
    stage3Title: 'Select Shipping Method',
    stage3Desc: 'Choose Express or Return',
    stage4aTitle: 'Enter Tracking Number',
    stage4aDesc: 'Please enter tracking number',
    stage5aTitle: 'Arrived at Vendor',
    stage5aDesc: 'Material arrived (Express)',
    stage4bTitle: 'Arrived at Vendor',
    stage4bDesc: 'Material arrived (Return)',
    stage6Title: 'FA in Progress',
    stage6Desc: 'Failure analysis ongoing',
    stage7Title: 'FA Completed',
    stage7Desc: 'FA report completed',
    labelTracking: 'Tracking #',
    routeExpressLabel: 'Express',
    routeReturnLabel: 'Return',
    btnComplete: 'Complete',
    btnComplete4a: 'Confirm & Continue',
    btnComplete7: 'Complete Process',
    btnReset: 'Reset',
    btnCancel: 'Cancel',
    btnSave: 'Save',
    btnPrint: 'Print',
    statusReady: 'Ready.',
    statusSaved: '✅ Saved!',
    statusCompleted: '🎉 Completed!',
    statusPending: 'Pending',
    statusInProgress: 'In Progress',
    statusDone: 'Done',
    recordNotFound: '❌ Not found!',
    pleaseEnterTracking: '⚠️ Enter tracking number!',
    pleaseSelectRoute: '⚠️ Select shipping method!',
    confirmReset: 'Reset process?',
    completedAt: 'Completed at',
    notCompleted: 'Not completed',
    language: 'Language'
  },
  'Tiếng Việt': {
    pageTitle: 'Chi tiết RTV',
    btnBack: 'Quay lại',
    sectionBasic: 'Thông tin',
    sectionTimeline: 'Quy trình',
    progressText: 'Tiến độ',
    labelQPN: 'QPN',
    labelSN: 'SN',
    labelDept: 'Bộ phận',
    stage1Title: 'Khởi động',
    stage1Desc: 'Bắt đầu quy trình',
    stage2Title: 'Đã rời xưởng',
    stage2Desc: 'Vật liệu đã rời xưởng',
    stage3Title: 'Chọn vận chuyển',
    stage3Desc: 'Chọn Express hoặc Return',
    stage4aTitle: 'Nhập số theo dõi',
    stage4aDesc: 'Nhập số theo dõi',
    stage5aTitle: 'Đã đến nhà cung cấp',
    stage5aDesc: 'Đã đến (Express)',
    stage4bTitle: 'Đã đến nhà cung cấp',
    stage4bDesc: 'Đã đến (Return)',
    stage6Title: 'FA đang tiến行',
    stage6Desc: 'Đang phân析',
    stage7Title: 'FA hoàn成',
    stage7Desc: 'Báo告完成',
    labelTracking: 'Số theo dõi',
    routeExpressLabel: 'Express',
    routeReturnLabel: 'Return',
    btnComplete: 'Hoàn thành',
    btnComplete4a: 'Xác nhận',
    btnComplete7: 'Hoàn thành',
    btnReset: 'Đặt lại',
    btnCancel: 'Hủy',
    btnSave: 'Lưu',
    btnPrint: 'In',
    statusReady: 'Sẵn sàng.',
    statusSaved: '✅ Đã lưu!',
    statusCompleted: '🎉 Hoàn thành!',
    statusPending: 'Chờ',
    statusInProgress: 'Đang',
    statusDone: 'Xong',
    recordNotFound: '❌ Không tìm thấy!',
    pleaseEnterTracking: '⚠️ Nhập số!',
    pleaseSelectRoute: '⚠️ Chọn vận chuyển!',
    confirmReset: 'Đặt lại?',
    completedAt: 'Hoàn成 lúc',
    notCompleted: 'Chưa完成',
    language: 'Ngôn ngữ'
  }
};

let currentLang = '繁體中文';
let currentRecord = null;
let recordId = null;
let currentStage = 0;
let selectedRoute = null;

const getEl = id => document.getElementById(id);

function formatDateTime(isoString) {
  if (!isoString) return '-';
  const d = new Date(isoString);
  const YYYY = d.getFullYear();
  const MM = String(d.getMonth()+1).padStart(2,'0');
  const DD = String(d.getDate()).padStart(2,'0');
  const hh = String(d.getHours()).padStart(2,'0');
  const mm = String(d.getMinutes()).padStart(2,'0');
  const ss = String(d.getSeconds()).padStart(2,'0');
  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  recordId = urlParams.get('id');
  if (!recordId) { alert('錯誤：未指定記錄 ID！'); window.location.href='index.html'; return; }
  loadRecord();
  setupEventListeners();
  applyLanguage();
  lucide.createIcons();
});

function loadRecord() {
  const stored = localStorage.getItem('iqcRecords');
  if (!stored) { updateStatus(langDict[currentLang].recordNotFound); setTimeout(()=>window.location.href='index.html',1500); return; }
  const records = JSON.parse(stored);
  currentRecord = records.find(r => r.id === parseInt(recordId));
  if (!currentRecord) { updateStatus(langDict[currentLang].recordNotFound); setTimeout(()=>window.location.href='index.html',1500); return; }
  if (!currentRecord.rtv_data) {
    currentRecord.rtv_data = { current_stage:0, selected_route:null, tracking_number:'', stage_completion:{}, completion_dates:{} };
  }
  currentStage = currentRecord.rtv_data.current_stage||0;
  selectedRoute = currentRecord.rtv_data.selected_route||null;
  displayRecordInfo();
  loadRTVData();
  updateAllStages();
}

function displayRecordInfo() {
  getEl('display-qpn').textContent = currentRecord.qpn||'-';
  getEl('display-sn').textContent = currentRecord.sn||'-';
  getEl('display-dept').textContent = currentRecord.dept||'-';
}

function loadRTVData() {
  const data = currentRecord.rtv_data || {};
  if (data.tracking_number) { getEl('tracking-number').value = data.tracking_number; getEl('tracking-value').textContent = data.tracking_number; }
  if (data.selected_route) { selectedRoute = data.selected_route; highlightSelectedRoute(); }
}

function saveRTVData() {
  const data = currentRecord.rtv_data;
  data.tracking_number = (getEl('tracking-number') && getEl('tracking-number').value) || '';
  data.selected_route = selectedRoute;
  const stored = JSON.parse(localStorage.getItem('iqcRecords') || '[]');
  const idx = stored.findIndex(r => r.id === parseInt(recordId));
  if (idx>-1) { stored[idx] = currentRecord; localStorage.setItem('iqcRecords', JSON.stringify(stored)); updateStatus(langDict[currentLang].statusSaved); }
}

function selectRoute(route) {
  if (currentStage >= 3) return;
  selectedRoute = route;
  currentRecord.rtv_data.selected_route = route;
  highlightSelectedRoute();
  setTimeout(()=>completeStage(3), 350);
}

function highlightSelectedRoute() {
  const e = getEl('route-express'), r = getEl('route-return');
  e.classList.remove('selected'); r.classList.remove('selected');
  if (selectedRoute==='express') e.classList.add('selected');
  if (selectedRoute==='return') r.classList.add('selected');
}

function completeStage(stage) {
  const lang = langDict[currentLang];
  if (stage===3 && !selectedRoute) { alert(lang.pleaseSelectRoute); return; }
  if (stage==='4a') {
    const tn = (getEl('tracking-number') && getEl('tracking-number').value.trim()) || '';
    if (!tn) { alert(lang.pleaseEnterTracking); if(getEl('tracking-number')) getEl('tracking-number').focus(); return; }
    getEl('tracking-value').textContent = tn;
  }
  // record timestamp
  const nowIso = new Date().toISOString();
  const key = 'stage' + stage;
  currentRecord.rtv_data.stage_completion[key] = true;
  currentRecord.rtv_data.completion_dates[key] = nowIso;

  // update currentStage numeric mapping
  if (stage===1) currentStage=1;
  else if (stage===2) currentStage=2;
  else if (stage===3) currentStage=3;
  else if (stage==='4a') currentStage=4;
  else if (stage==='5a') currentStage=5;
  else if (stage==='4b') currentStage=4;
  else if (stage===6) currentStage=6;
  else if (stage===7) currentStage=7;

  currentRecord.rtv_data.current_stage = currentStage;
  saveRTVData();
  updateAllStages();
  if (stage===7) { updateStatus(lang.statusCompleted); confetti(); }
}

function resetProcess() {
  const lang = langDict[currentLang];
  if (!confirm(lang.confirmReset)) return;
  currentRecord.rtv_data = { current_stage:0, selected_route:null, tracking_number:'', stage_completion:{}, completion_dates:{} };
  currentStage=0; selectedRoute=null;
  if (getEl('tracking-number')) getEl('tracking-number').value='';
  saveRTVData();
  updateAllStages();
  updateStatus(lang.statusReady);
}

function updateAllStages() {
  const completion = currentRecord.rtv_data.stage_completion || {};
  const completionDates = currentRecord.rtv_data.completion_dates || {};
  const lang = langDict[currentLang];

  // total stages depends on selected route
  let totalStages = 3;
  if (selectedRoute==='express') totalStages = 7; // 1,2,3,4a,5a,6,7
  else if (selectedRoute==='return') totalStages = 6; // 1,2,3,4b,6,7

  const completedCount = Object.values(completion).filter(Boolean).length;
  const pct = totalStages>0 ? Math.round((completedCount/totalStages)*100) : 0;
  getEl('progress-percentage').textContent = pct + '%';
  // update progress line width
  const fill = getEl('progress-line-fill');
  if (fill) fill.style.width = pct + '%';

  // hide all route-specific items first
  document.querySelectorAll('.timeline-item[data-route]').forEach(it => it.classList.add('hidden-stage'));

  if (selectedRoute==='express') {
    getEl('stage-4a').classList.remove('hidden-stage');
    getEl('stage-5a').classList.remove('hidden-stage');
    getEl('stage-6').classList.remove('hidden-stage');
    getEl('stage-7').classList.remove('hidden-stage');
  } else if (selectedRoute==='return') {
    getEl('stage-4b').classList.remove('hidden-stage');
    getEl('stage-6').classList.remove('hidden-stage');
    getEl('stage-7').classList.remove('hidden-stage');
  }

  // update each stage UI
  updateStageStatus('stage-1',1,completion,completionDates,lang);
  updateStageStatus('stage-2',2,completion,completionDates,lang);
  updateStageStatus('stage-3',3,completion,completionDates,lang);

  if (selectedRoute==='express') {
    updateStageStatus('stage-4a',4,completion,completionDates,lang);
    updateStageStatus('stage-5a',5,completion,completionDates,lang);
    updateStageStatus('stage-6',6,completion,completionDates,lang);
    updateStageStatus('stage-7',7,completion,completionDates,lang);
  } else if (selectedRoute==='return') {
    updateStageStatus('stage-4b',4,completion,completionDates,lang);
    updateStageStatus('stage-6',6,completion,completionDates,lang);
    updateStageStatus('stage-7',7,completion,completionDates,lang);
  }

  // disable route selector after stage 3
  if (currentStage >= 3) {
    document.querySelectorAll('.route-option').forEach(o => { o.style.pointerEvents='none'; o.style.opacity='0.6'; });
  } else {
    document.querySelectorAll('.route-option').forEach(o => { o.style.pointerEvents='auto'; o.style.opacity='1'; });
  }
}

function updateStageStatus(stageId, stageNum, completion, completionDates, lang) {
  const el = getEl(stageId); if (!el) return;
  const badge = getEl(stageId + '-badge');
  const stageKey = 'stage' + stageId.replace('stage-',''); // e.g., stage-4a => stage4a
  el.classList.remove('pending','active','completed');

  // remove old time display
  const old = el.querySelector('.completion-time');
  if (old) old.remove();

  if (completion[stageKey]) {
    el.classList.add('completed');
    if (badge) { badge.textContent = lang.statusDone; badge.className='badge'; badge.style.background='#bfdbfe'; badge.style.color='#1e3a8a'; }
    const t = completionDates[stageKey];
    if (t) {
      const box = document.createElement('div');
      box.className = 'completion-time';
      box.innerHTML = `<i data-lucide="clock" class="w-4 h-4"></i><div><div style="font-weight:600;color:#1e3a8a">${lang.completedAt}</div><div class="font-mono">${formatDateTime(t)}</div></div>`;
      el.querySelector('.timeline-card').appendChild(box);
      lucide.createIcons();
    }
  } else if ((currentStage === stageNum - 1) || (stageNum === 3 && currentStage === 2)) {
    el.classList.add('active');
    if (badge) { badge.textContent = lang.statusInProgress; badge.className='badge'; badge.style.background='#bbf7d0'; badge.style.color='#065f46'; }
  } else {
    el.classList.add('pending');
    if (badge) { badge.textContent = lang.statusPending; badge.className='badge'; badge.style.background='#f3f4f6'; badge.style.color='#374151'; }
  }
}

function setupEventListeners() {
  const ls = getEl('lang-selector');
  if (ls) ls.addEventListener('change',(e)=>{ currentLang = e.target.value; applyLanguage(); });
  const save = getEl('save-btn'); if (save) save.addEventListener('click', saveRTVData);
  const reset = getEl('reset-btn'); if (reset) reset.addEventListener('click', resetProcess);
  const track = getEl('tracking-number'); if (track) track.addEventListener('blur', saveRTVData);
  lucide.createIcons();
}

function applyLanguage() {
  const lang = langDict[currentLang];
  getEl('stage-1-title').textContent = lang.stage1Title;
  getEl('stage-1-desc').textContent = lang.stage1Desc;
  getEl('stage-2-title').textContent = lang.stage2Title;
  getEl('stage-2-desc').textContent = lang.stage2Desc;
  getEl('stage-3-title').textContent = lang.stage3Title;
  getEl('stage-3-desc').textContent = lang.stage3Desc;
  getEl('stage-4a-title').textContent = lang.stage4aTitle;
  getEl('stage-4a-desc').textContent = lang.stage4aDesc;
  getEl('stage-5a-title').textContent = lang.stage5aTitle;
  getEl('stage-5a-desc').textContent = lang.stage5aDesc;
  getEl('stage-4b-title').textContent = lang.stage4bTitle;
  getEl('stage-4b-desc').textContent = lang.stage4bDesc;
  getEl('stage-6-title').textContent = lang.stage6Title;
  getEl('stage-6-desc').textContent = lang.stage6Desc;
  getEl('stage-7-title').textContent = lang.stage7Title;
  getEl('stage-7-desc').textContent = lang.stage7Desc;
  getEl('route-express-label').textContent = lang.routeExpressLabel;
  getEl('route-return-label').textContent = lang.routeReturnLabel;
  getEl('label-tracking').textContent = lang.labelTracking;
  updateAllStages();
  lucide.createIcons();
}

function updateStatus(message, clearAfterMs=3000) {
  const s = getEl('status-bar'); if (!s) return;
  s.textContent = message;
  if (window.statusTimeout) clearTimeout(window.statusTimeout);
  if (clearAfterMs>0) window.statusTimeout = setTimeout(()=> s.textContent = langDict[currentLang].statusReady, clearAfterMs);
}

function confetti() {
  const colors = ['#667eea','#764ba2','#f093fb','#4facfe'];
  for (let i=0;i<40;i++){
    const c = document.createElement('div');
    c.style.position='fixed'; c.style.width='8px'; c.style.height='8px'; c.style.background = colors[Math.floor(Math.random()*colors.length)];
    c.style.left = Math.random()*window.innerWidth+'px'; c.style.top='-10px'; c.style.zIndex=9999; document.body.appendChild(c);
    const dur = 1800 + Math.random()*1000; const horiz = (Math.random()-0.5)*200;
    c.animate([{transform:'translate(0,0)'},{transform:`translate(${horiz}px,${window.innerHeight+30}px)`}],{duration:dur,easing:'cubic-bezier(.25,.46,.45,.94)'}).onfinish=()=>c.remove();
  }
}

// Expose to global for onclick bindings
window.completeStage = completeStage;
window.selectRoute = selectRoute;
window.resetProcess = resetProcess;
window.saveRTVData = saveRTVData;