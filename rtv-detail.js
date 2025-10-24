// 測試：確認文件被正確加載
console.log('=== RTV Detail JS Loaded ===');

let currentLanguage = 'zh';

// 立即檢查 localStorage
const savedLang = localStorage.getItem('language');
console.log('LocalStorage language:', savedLang);

// 簡單的翻譯對象
const translations = {
    zh: { pageTitle: 'RTV 流程追蹤', backButton: '返回' },
    en: { pageTitle: 'RTV Process Tracking', backButton: 'Back' },
    vi: { pageTitle: 'Theo dõi quy trình RTV', backButton: 'Quay lại' }
};

// 設置語言
if (savedLang && translations[savedLang]) {
    currentLanguage = savedLang;
    console.log('✓ Language set to:', currentLanguage);
} else {
    console.log('✗ No valid language found, using default: zh');
}

// 頁面加載後立即更新文字
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, current language:', currentLanguage);
    
    const titleEl = document.getElementById('page-title');
    const backEl = document.getElementById('back-button-text');
    
    if (titleEl) {
        titleEl.textContent = translations[currentLanguage].pageTitle;
        console.log('✓ Title updated to:', titleEl.textContent);
    } else {
        console.log('✗ page-title element not found');
    }
    
    if (backEl) {
        backEl.textContent = translations[currentLanguage].backButton;
        console.log('✓ Back button updated to:', backEl.textContent);
    } else {
        console.log('✗ back-button-text element not found');
    }
});
