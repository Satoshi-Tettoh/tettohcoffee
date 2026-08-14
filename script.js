const btn = document.getElementById('langToggle');
let lang = 'ja';

btn.addEventListener('click', () => {
  lang = lang === 'ja' ? 'en' : 'ja';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-ja][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });

  btn.textContent = lang === 'ja' ? 'EN' : 'JP';
});