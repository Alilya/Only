const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  btn.innerHTML =
    (btn.innerHTML === 'Стадион') ? btn.innerHTML = '+' : btn.innerHTML = 'Стадион';
})
