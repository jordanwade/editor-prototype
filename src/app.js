// -------------------------------------
//   Selectors
// -------------------------------------

const btn = document.querySelector('.btn');
const controls = document.querySelector('.tab-icon-settings');
const items = Array.from(document.querySelectorAll('.tab'));
const theme = document.querySelector('.theme');
const gear = document.querySelector('.tab-icon-settings');
const sampleHTML = document.querySelector('.sample-html');

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
  const selector = document.querySelector('.flash');
  const element = document.querySelector('.flash-message');

  if (!element) {
    selector.innerHTML = `<span class='flash-message'>Success +250 pts</span>`;
  } else {
    element.innerHTML = 'Success';
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
//   Icons
// -------------------------------------

const gearIcon = `<svg class="nc-icon glyph theme-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 24 24"> <g> <path fill="#8c9aa5" d="M8,17.06V20h8v-2.94c3.059-1.514,5-4.607,5-8.06c0-4.963-4.038-9-9-9S3,4.037,3,9 C3,12.452,4.941,15.546,8,17.06z M8,7.586l2,2l2-2l2,2l2-2L17.414,9L14,12.414l-2-2l-2,2L6.586,9L8,7.586z"></path> <path data-color="color-2" fill="#8c9aa5" d="M8,22v1c0,0.553,0.448,1,1,1h6c0.552,0,1-0.447,1-1v-1H8z"></path> </g> </svg>`;

gear.innerHTML = gearIcon;


// -------------------------------------
//   Sample HTML
// -------------------------------------

const markup = `
<div class='tabs theme-tabs'>
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

