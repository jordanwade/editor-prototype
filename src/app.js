// -------------------------------------
//   Selectors
// -------------------------------------

const btn = document.querySelector('.btn');
const controls = document.querySelector('.tab-icon-settings');
const items = Array.from(document.querySelectorAll('.tab'));
const sampleHTML = document.querySelector('.sample-html');
const settings = document.querySelector('.tab-icon-settings');
const theme = document.querySelector('.theme');

// -------------------------------------
//   Icons
// -------------------------------------

const settingsIcon = "<svg class='nc-icon glyph theme-icon' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='18px' height='18px' viewBox='0 0 24 24'> <g> <path fill='#8c9aa5' d='M8,17.06V20h8v-2.94c3.059-1.514,5-4.607,5-8.06c0-4.963-4.038-9-9-9S3,4.037,3,9 C3,12.452,4.941,15.546,8,17.06z M8,7.586l2,2l2-2l2,2l2-2L17.414,9L14,12.414l-2-2l-2,2L6.586,9L8,7.586z'></path> <path data-color='color-2' fill='#8c9aa5' d='M8,22v1c0,0.553,0.448,1,1,1h6c0.552,0,1-0.447,1-1v-1H8z'></path> </g> </svg>";

const checkmarkIcon = "<svg class='nc-icon outline' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='18px' height='18px' viewBox='0 0 24 24'><g transform='translate(0, 0)'> <path data-cap='butt' fill='none' stroke='#8c9aa5' stroke-width='2' stroke-miterlimit='10' d='M20.7,9.4c0.2,0.8,0.3,1.7,0.3,2.6 c0,5.5-4.5,10-10,10S1,17.5,1,12S5.5,2,11,2c1.9,0,3.7,0.5,5.3,1.5' stroke-linejoin='miter' stroke-linecap='butt'></path> <polyline data-color='color-2' fill='none' stroke='#8c9aa5' stroke-width='2' stroke-linecap='square' stroke-miterlimit='10' points=' 7,10 11,14 22,3 ' stroke-linejoin='miter'></polyline> </g></svg>";

settings.innerHTML = settingsIcon;

// -------------------------------------
//   Toggle Active File
// -------------------------------------

function toggleActive(e) {
  e.preventDefault();
  const tabItems = document.querySelectorAll('.tab');

  tabItems.forEach(tab => {
    tab.classList.remove('is-active');
  });

  this.classList.add('is-active');
}

items.forEach(item => {
  item.addEventListener('click', toggleActive);
});

// -------------------------------------
//   Flash Success Message
// -------------------------------------

const flash = () => {
  const el = document.querySelector('.flash-message');
  const selector = document.querySelector('.flash');

  if (!el) {
    selector.innerHTML = `${checkmarkIcon}&nbsp;<span class="flash-message">Success! +250 pts</span>`;
  } else {
    el.innerHTML = 'Success!';
  }
};

// -------------------------------------
//   Toggle Theme
// -------------------------------------

const storageKey = 'editor:lighttheme';
let themeLight = false;

const toggleTheme = e => {
  e.preventDefault();
  theme.classList.toggle('is-light');
  themeLight = !themeLight;
  if (themeLight === false) {
    localStorage.setItem(storageKey, themeLight);
  } else {
    localStorage.setItem(storageKey, themeLight);
  }
};

// -----  Get Local Storage ----- //

themeLight = JSON.parse(localStorage.getItem(storageKey));

if (themeLight === true) {
  theme.classList.add('is-light');
}

// -------------------------------------
//   Events
// -------------------------------------

btn.addEventListener('click', flash);
controls.addEventListener('click', toggleTheme);

// -------------------------------------
//   Sample HTML
// -------------------------------------

const markup = `
<div class="tabs theme-tabs">
  <a href="#" class="tab is-active">app.js</a>
  <a href="#" class="tab">index.html</a>
<div class="tab-controls">
  <span class="tab-icon-settings"></span>
</div>`;

const reg = '\n';
const markupLines = markup.trim().split(reg);

sampleHTML.innerHTML = markupLines.map((line, i) => {
  const str = line.replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

  return `<span data-index=${i}>${str}</span>`;
}).join('');

