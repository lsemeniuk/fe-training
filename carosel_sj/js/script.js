// BY JQUERY

$(document).ready(function() {
  let position = 0;
  const slidesToShow = 4;
  const slidesToScrol = 3;
  const container = $('.slider-container');
  const track = $('.slider-track');
  const item = $('.slider-item');
  const btnPrev = $('.btn-prev');
  const btnNext = $('.btn-next');
  const itemsCount = item.length;
  const itemWidth = Math.round(container.width()) / slidesToShow;
  const movePosition = slidesToScrol * itemWidth;
  
  item.each(function(index, item) {
    $(item).css({
      minWidth: itemWidth,
    });
  });


  btnNext.click(function () {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScrol ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  btnPrev.click(function () {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScrol ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`
    });
  };

  const checkBtns = () => {
    btnPrev.prop('disabled', position === 0);
    btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
  };

  checkBtns();
});

// BY JS

  // let position = 0;
  // const slidesToShow = 4;
  // const slidesToScrol = 3;
  // const container = document.querySelector('.slider-container');
  // const track = document.querySelector('.slider-track');
  // const items = document.querySelectorAll('.slider-item');
  // const btnPrev = document.querySelector('.btn-prev');
  // const btnNext = document.querySelector('.btn-next');
  // const itemsCount = items.length;
  // const itemWidth = container.clientWidth / slidesToShow;
  // const movePosition = slidesToScrol * itemWidth;

  // items.forEach((item) => {
  //   item.style.minWidth = itemWidth + 'px';
  // })


  // btnNext.addEventListener('click', () => {
  //   const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  //   position -= itemsLeft >= slidesToScrol ? movePosition : itemsLeft * itemWidth;

  //   setPosition();
  //   checkBtns();
  // });

  // btnPrev.addEventListener('click', () => {
  //   const itemsLeft = Math.abs(position) / itemWidth;

  //   position += itemsLeft >= slidesToScrol ? movePosition : itemsLeft * itemWidth;

  //   setPosition();
  //   checkBtns();
  // });

  // const setPosition = () => {
  //   track.style.transform = `translateX(${position}px)`

  // };

  // const checkBtns = () => {
  //   btnPrev.disabled = position === 0;
  //   btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  //   console.log(-(itemsCount - slidesToShow) * itemWidth);
  // }

  // checkBtns();