$(document).ready(function () {
  $(document).scroll(function () {
    if ($(document).scrollTop() > 103) {
      $('.page-header__stiky').removeClass('visually-hidden');
      $('.stiky-desktope').removeClass('visually-hidden');
    }
    else {
      $('.page-header__stiky').addClass('visually-hidden');
      $('.stiky-desktope').addClass('visually-hidden');
    }
  });
});
