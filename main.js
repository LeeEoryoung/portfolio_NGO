// login modal
$(function (){
    $('.login_btn').click(function () {
        $('.modal_login, body').addClass('active')
    });
    $('.mo_login_btn').click(function () {
        $('.modal_login, body').addClass('active')
    });
    $('#popup_login_btn').click(function () {
        alert("welcome WNC😄")
    });
    $('.btn_close').click(function () {
        $('.modal_login, body').removeClass('active')
    });
});


var mySwiper = new Swiper('.swiper-container', {
    speed: 500,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    //slide page num
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'fraction',
    },
    //slide arrow button 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

var sw = 0;
$('.btn_pause').click(function () {
    if (sw == 0) {
        $('.btn_pause').addClass('on');
        mySwiper.autoplay.stop();
        sw = 1;
    } else {
        $('.btn_pause').removeClass('on');
        mySwiper.autoplay.start();
        sw = 0;
    }

});

// responsive trigger 
$(function () {
    $('.trigger').click(function () {
        $(this).toggleClass('active')
        $('.mo_gnb').toggleClass('active')
    })
});


// mobile gnb
$(window).resize(function () {
    if ($(window).width() < 768) {
        let title = $('.mo_gnb>a'),
            dropdown = $('.dropdown');

        $(document).ready(function(){
            title.click(function(){
                title.removeClass('active');
                $(this).addClass('active');
                $(this).next().slideToggle();
                $(this).next().siblings('div').slideUp();
            });
        });
    }
});


