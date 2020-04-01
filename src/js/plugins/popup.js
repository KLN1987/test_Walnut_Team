/*var popup = document.querySelector('.popup');
document.querySelectorAll('.callback').onclick = function() {
  event.preventDefault();
  popup.classList.remove('visually-hidden');
};
document.querySelectorAll('.popup__closed').onclick = function() {
  event.preventDefault();
  popup.classList.add('visually-hidden');
};*/

var popup = document.querySelector('.popup');
var callback = document.querySelectorAll('.callback');

for (var i = 0; i < callback.length; i++) {
  callback[i].onclick = function () {
    event.preventDefault();
    popup.classList.remove('visually-hidden');
  };
}

document.querySelector('.popup__closed').onclick = function () {
    event.preventDefault();
    popup.classList.add('visually-hidden');
  };
