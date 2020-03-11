// Вариант 1
// const inputRef = document.querySelector('input#font-size-control');
// const spanRef = document.querySelector('span#text');

// inputRef.addEventListener('input', e => {
//     const fontSize = e.target.value / 3.125
//   spanRef.style.fontSize = `${fontSize}px`;
// });

// Вариант 2
const inputRef = document.querySelector('input#font-size-control');
const spanRef = document.querySelector('span#text');
spanRef.style.fontSize = '16px'
inputRef.value = Number.parseInt(spanRef.style.fontSize)

inputRef.addEventListener('input', e => {
  spanRef.style.fontSize = `${e.target.value}px`;
});