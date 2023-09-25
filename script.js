const buttons = document.querySelectorAll('button'); // получаем NodeList с кнопками

for (let button of buttons) {
  button.addEventListener('click', function() {
    button.innerHTML =
    (button.innerHTML === button.value) ? button.innerHTML = '+': button.innerHTML =  button.value;
  });
  
}


