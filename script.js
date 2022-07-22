function convertValue() {
  let value = document.getElementById('inputValue').value;
  let select = document.getElementById('selection').value;
  let x = '';
  x = value;
  let length = x.length;
  let aux = length;
  let result = 0;
  let lessThan8 = false;
  if(length == 0){
      alert('Enter a value to continue');
  }
  else if(length <= 8 && length > 0){
    lessThan8 = true;
    
  }
  else{
    alert('The binary you entered is not allowed: (the number of values must be less than or equal to 8)');
  }
  
  if (select === 'decimal') {
    while(lessThan8){
      for(let i = 0; i < aux; i++) {
        result = result + (+x[i] * Math.pow(2,length-1));
        if(+x[i] !== 1 && +x[i] !== 0){
          alert('The binary you entered is not allowed: (Enter a valid binary)');
          result = 0;
          break;
        }
        length--;
      }
      lessThan8 = false;
    }
  }
  else {
    let num = +value;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    result = binary;
  }
  document.getElementById('result').innerText = result;
    
}

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});