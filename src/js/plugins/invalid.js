/*$('document').ready(function () {
  $('.application__btn').on('click', function () {
    $('input[required]').addClass('test');
  });
});*/

var application = document.querySelector('.application__btn');
var successfully = document.querySelector('.successfully-sent');
var form = document.querySelector('.form');
var popup = document.querySelector('.popup');


var validate = function() {
  var name = document.getElementById('name');
  var phone = document.getElementById('phone');
  var toggle = document.querySelector('.toggle');

  if (name.value == "") {
    name.classList.add('test');
    return false;
  }
  else if (phone.value == "") {
    phone.classList.add('test');
    return false;
  }
  else if (toggle.classList.contains("visually-hidden")) {
    return false;
  }
    return true;
};

application.addEventListener('click', validate);

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  popup.classList.add('visually-hidden');
  successfully.classList.remove('visually-hidden');
  form.reset();
});

