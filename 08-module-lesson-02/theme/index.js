const themeSwitcher = document.getElementById('theme-switch');

themeSwitcher.checked = false;

function clickHandler() {
  if (this.checked) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

function checkTheme() {
  const localStorageTheme = localStorage.getItem('theme');

  // set the theme of body
  document.body.className = localStorageTheme;

  // adjust the slider position
  if (localStorageTheme === 'dark') {
    themeSwitcher.checked = true;
  }
}

themeSwitcher.addEventListener('change', clickHandler);
window.addEventListener('load', checkTheme);
