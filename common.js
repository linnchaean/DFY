// header
let scrollTop;
let offsetTop = $('header').offset().top;

$(window).on('scroll', function () {
  scrollTop = $(window).scrollTop();

  $('header').each(function () {
    if ($(window).height() / 10 < scrollTop) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });
});
