const themeRenderFooter = document.querySelector('.footer');
const titleRenderTheme = document.querySelector('body');
const bgButtonToogl = document.querySelector('.theme-day');

const checkBox = document.getElementById('myCheck');

checkBox.addEventListener('change', evt => {
  evt.preventDefault();
  if (checkBox.checked) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
  addDarkTheme();
});

function addDarkTheme() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      titleRenderTheme.classList.add('darkTheme');
    } else {
      titleRenderTheme.classList.remove('darkTheme');
    }
  } catch (err) {}
}
addDarkTheme();
