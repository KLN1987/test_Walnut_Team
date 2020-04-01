var successfullySent = document.querySelector('.successfully-sent');
document.querySelector('.successfully-sent__closed').onclick = function() {
  event.preventDefault();
  successfullySent.classList.add('visually-hidden');
};
