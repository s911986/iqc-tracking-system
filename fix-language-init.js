// 在文件開頭添加調試信息
console.log('RTV Detail page loaded');
console.log('LocalStorage language:', localStorage.getItem('language'));

function initLanguage() {
    const savedLanguage = localStorage.getItem('language');
    console.log('Saved language from localStorage:', savedLanguage);
    
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        console.log('Language set to:', currentLanguage);
    } else {
        currentLanguage = 'zh'; // 默認中文
        console.log('Using default language: zh');
    }
}
