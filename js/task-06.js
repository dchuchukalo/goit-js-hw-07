const setValue = value => {
  const inputRef = document.querySelector('input#validation-input');
  inputRef.dataset.length = value;
  const quantityOfSymbols = Number(inputRef.dataset.length);
  inputRef.placeholder = `Введи ${inputRef.dataset.length} символов`;

  inputRef.addEventListener('change', e => {
    if (e.target.selectionEnd !== quantityOfSymbols) {
      if (inputRef.classList.contains('valid')) {
        inputRef.classList.replace('valid', 'invalid');
      }
      inputRef.classList.add('invalid');
    }

    if (e.target.selectionEnd === quantityOfSymbols) {
      if (inputRef.classList.contains('invalid')) {
        inputRef.classList.replace('invalid', 'valid');
      }
      inputRef.classList.add('valid');
    }
  });
};

setValue(10);
