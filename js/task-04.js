const valueRef = document.querySelector('span#value');
const incrementRef = document.querySelector('[data-action=increment]');
const decrementRef = document.querySelector('[data-action=decrement]');

let counterValue = Number(valueRef.textContent);

const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);

incrementRef.addEventListener('click', () => {
  increment();
  valueRef.textContent = counterValue;
});

decrementRef.addEventListener('click', () => {
  decrement();
  valueRef.textContent = counterValue;
});
