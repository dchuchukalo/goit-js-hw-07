const inputRef = document.querySelector('div#controls input');
const render = document.querySelector('[data-action=render]');
const destroy = document.querySelector('[data-action=destroy]');
const boxesRef = document.querySelector('div#boxes');
const arrOfDiv = [];

render.addEventListener('click', () => createBoxes());

destroy.addEventListener('click', () => (boxesRef.innerHTML = ''));

const createBoxes = amount => {
  amount = Number(inputRef.value);
  const basicSize = 30;
  const randomColor = () => Math.floor(Math.random() * 256);
  const total = amount + arrOfDiv.length

  for (let i = arrOfDiv.length; i < total; i += 1) {
    const div = document.createElement('div');
    let size = basicSize + i * 10;
    div.style = `width: ${size}px; height: ${size}px; background-color: rgba( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;
    arrOfDiv.push(div);
  }
  boxesRef.append(...arrOfDiv);
};
