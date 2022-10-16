const themeRenderFooter = document.querySelector('.footer');
const titleRenderTheme = document.querySelector('body');
const bgButtonToogl = document.querySelector('.theme-day');
const gallaryTitleBlack = document.querySelector('.gallery__title');
console.log(gallaryTitleBlack);

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
      themeRenderFooter.classList.add('darkTheme');
      gallaryTitleBlack.classList.add('darkTheme');
    } else {
      titleRenderTheme.classList.remove('darkTheme');
      themeRenderFooter.classList.remove('darkTheme');
      gallaryTitleBlack.classList.remove('darkTheme');
    }
  } catch (err) {}
}
addDarkTheme();
// change;

// состояние чекбокса

class Stogage {
  constructor(name) {
    this.name = name;
    this.hash = {};
    let text = localStorage.getItem(this.name);
    if (text) this.hash = JSON.parse(text);
    this.save();
  }

  get(id) {
    return this.item.find(item => item.id === id);
  }

  add(id, data) {
    this.hash[id] = data;
    this.save();
  }

  del(id) {
    delete this.hash[id];
    this.save();
  }

  save() {
    this.list = Object.values(this.hash);
    const text = JSON.stringify(this.hash);
    localStorage.setItem(this.name, text);
  }
}

const checkbox_store = new Stogage('checkbox_store');

// проверка чекбокса

checkbox_store.list.forEach(item => {
  if (item.state === 'on') {
    return (document.querySelector('#' + item.id).checked = item.state);
  }

  checkbox_store.del(item.id);
});

// восстанавливаем чекбокс

function changeHandler(event) {
  let id = event.currentTarget.id;
  let state = event.currentTarget.checked ? 'on' : undefined;
  checkbox_store.add(id, {
    id: id,
    state: state,
  });
}

document.querySelectorAll('.check').forEach(function (item) {
  item.addEventListener('change', changeHandler);
});
