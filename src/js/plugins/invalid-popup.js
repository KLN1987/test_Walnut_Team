var successfully = document.querySelector('.successfully-sent');
var popupBtn = document.querySelector('.popup__btn');
var applicationForm = document.querySelector('.popup__form');

var validateTwo = function() {
  var namePopup = document.getElementById('name-popup');
  var phonePopup = document.getElementById('phone-popup');
  var togglePopup = document.querySelector('.toggle-popup');
  var popup = document.querySelector('.popup');

  if (namePopup.value == "") {
    namePopup.classList.add('test');
    return false;
  }
  else if (phonePopup.value == "") {
    phonePopup.classList.add('test');
    return false;
  }
  else if (togglePopup.classList.contains("visually-hidden")) {
    return false;
  }
    return true;
};

popupBtn.addEventListener('click', validateTwo);

applicationForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  popup.classList.add('visually-hidden');
  successfully.classList.remove('visually-hidden');
  applicationForm.reset();
})
