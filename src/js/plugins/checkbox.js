/*var checkbox = document.querySelectorAll('.checkbox__input');
var toggle = document.querySelector('.toggle');

/*for (var i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('click', function () {
    toggle.classList.remove('visually-hidden');
  });
};

for (var i = 0; i < checkbox.length; i++) {
  if (checkbox[i].checked) {
    toggle.classList.remove('visually-hidden');
  } else {
    toggle.classList.add('visually-hidden');
  }
}*/

$("#agree").click(function(){
  $(".toggle").toggleClass("visually-hidden");
});

$("#agree-popup").click(function(){
  $(".toggle-popup").toggleClass("visually-hidden");
});
