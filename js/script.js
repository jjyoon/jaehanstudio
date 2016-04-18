$('.project-icon').click(function(e) {
   e.preventDefault();
   $(this).siblings('.project-img').fadeIn();
    $('body').addClass('noscroll');
});

$('.exit-container').click(function(){
   $(this).parent().fadeOut(); 
    $('body').removeClass('noscroll');
});