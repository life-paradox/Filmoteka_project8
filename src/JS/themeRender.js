import { getTheme, setTheme } from './localStorage';

const checkBox = document.getElementById('myCheck');

function setPageTheme() {
  const themeRenderFooter = document.querySelector('.footer');
  const titleRenderTheme = document.querySelector('body');
  const gallaryTitleBlack = document.querySelectorAll('.gallery__title');

  if (getTheme() === 'dark') {
    titleRenderTheme.classList.add('darkTheme');
    themeRenderFooter.classList.add('darkTheme');
    gallaryTitleBlack.forEach(el => el.classList.add('darkTheme'));
    checkBox.checked = true;
  } else {
    titleRenderTheme.classList.remove('darkTheme');
    themeRenderFooter.classList.remove('darkTheme');
    gallaryTitleBlack.forEach(el => el.classList.remove('darkTheme'));
    checkBox.checked = false;
  }
}

checkBox.addEventListener('change', evt => {
  const theme = evt.target.checked ? 'dark' : 'light';
  setTheme(theme);
  setPageTheme();
});

setTimeout(setPageTheme, 100);
