(function () {
  let toogle = document.querySelector('.dropdown__toggle');
  toogle.addEventListener('click', function (event) {
    event.preventDefault();
    let dropdown = event.target.parentNode;
    console.log(dropdown);
    dropdown.classList.toggle('is-open');
  });
})();
