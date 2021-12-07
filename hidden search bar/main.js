const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const result = document.querySelector('.result');

btn.addEventListener('click', e => {
  search.classList.add('active');
});

// search.
form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log();
  result.innerText = input.value;
});
