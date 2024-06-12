function setLanguage(lang) {
    console.log(`Setting language to: ${lang}`);
    document.querySelectorAll('[data-lang-en], [data-lang-sk]').forEach(el => {
        const enText = el.getAttribute('data-lang-en');
        const skText = el.getAttribute('data-lang-sk');
        if (lang === 'en' && enText !== null) {
            el.innerText = enText;
        } else if (lang === 'sk' && skText !== null) {
            el.innerText = skText;
        }
    });
    localStorage.setItem('language', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem('language') || 'en';
    console.log(`Loaded language from localStorage: ${language}`);
    setLanguage(language);
});
