setTimeout(function () {
    $('.sprite-container img').fadeIn();
}, 500);

setTimeout(function () {
    $('.sprite-container').removeClass('center');
}, 1500);

setTimeout(function () {
    $('.hero-statement').fadeIn(750);
}, 2000);

$('.project-icon').click(function (e) {
    e.preventDefault();
    $(this).siblings('.project-img').fadeIn();
    $('body').addClass('noscroll');
});

$('.exit-container').click(function () {
    $(this).parent().fadeOut();
    $('body').removeClass('noscroll');
});

$('nav a').click(function (e) {
    //e.preventDefault();
    var $section = $(this).attr("href");
    var sectionPos = $($section).offset().top;

    $('body,html').animate({
        scrollTop: sectionPos
    });
});