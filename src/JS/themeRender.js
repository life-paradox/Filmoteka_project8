const themeRender = document.querySelector('#theme-day');
const themeRenderFooter = document.querySelector('.footer');
const titleRenderTheme = document.querySelector('.main');
const bgButtonToogl = document.querySelector('.theme-day');

themeRender.addEventListener('click', onChengeTheme);
function onChengeTheme() {
  themeRenderFooter.classList.toggle('darkTheme');
  titleRenderTheme.classList.toggle('darkTheme');
  // titleRenderText.classList.toggle('darkTheme');
  bgButtonToogl.classList.toggle('dark');
}
