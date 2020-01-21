$(window).scroll(function () {
   var scrollTop = $(window).scrollTop(), currentTime=Date.now(), height = $(window).height();
    $('body').css({
        'opacity': ((height - scrollTop) / height)
    }); 
});