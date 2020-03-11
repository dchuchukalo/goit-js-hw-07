const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', e => {
  outputRef.textContent = e.target.value;
  if (outputRef.textContent.length === 0) {
    return  outputRef.textContent = 'незнакомец'
  }
});
