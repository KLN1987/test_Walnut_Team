var navMain = document.querySelector('.main-nav');
var navBtn = document.querySelectorAll('.main-nav__btn');

// navMain.classList.remove('main-nav--nojs');
for (var i = 0; i < navBtn.length; i++) {
navBtn[i].addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
}
