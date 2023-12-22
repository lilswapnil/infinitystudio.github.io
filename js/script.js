$(function () { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) { 
            $('.brand-name');
        }
        if ($(this).scrollTop() < 300) { 
            $('.brand-name').attr('src','data/icons8-loading-infinity.gif');
        }
    })
});