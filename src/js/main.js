$(document).ready(function(){

    //----Scroll button

    $(".scroll-icon").click(function () {
        $('html,body').animate({
            scrollTop: $(".development-section").offset().top
        }, 1000);
    });

    //----Our Team Slider

    $('.our-team .item li').hover(function () {
        $('.our-team .active .color').removeClass('color-active');
        $(this).find('.color').addClass('color-active');
    });


    $('.our-team .item li').hover(function () {
        $('.our-team .active li .foto').removeClass('scale-active');
        $(this).find('.foto').addClass('scale-active');
    });


});