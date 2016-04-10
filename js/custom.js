jQuery(document).ready(function($) {

    // Menu mobile
    $('header .mobile-toggle i').click(function(){
        $('header .menu').slideToggle();
    });

    // Slider
    $('.bxslider').bxSlider({
        pager: false
    });

});
