let input = document.getElementById('trip');
let button = document.getElementById('submit-button');

button.addEventListener('click', function (event) {
  event.preventDefault();
  button.classList.add('is-loading');
  button.disabled = true;
  input.disabled = true;
  setTimeout(() => {
    button.classList.remove('is-loading');
    button.disabled = false;
    input.disabled = false;
  }, 3000);
});

let timeout = null;

input.addEventListener('keyup', function () {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    button.classList.add('shake');
  }, 1000);
});

button.addEventListener('animationend', function () {
  button.classList.remove('shake');
});
