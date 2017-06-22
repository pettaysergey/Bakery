$(document).ready(function() {
    var carousel = $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 2000
    })

    $('.menu__prev').on('click', function(e) {
        e.preventDefault();
        carousel.trigger('prev.owl.carousel');
    })
    $('.menu__next').on('click', function(e) {
        e.preventDefault();
        carousel.trigger('next.owl.carousel');
    })
});

// fancybox
$(function() {
    $('.breakfast__menu-button').fancybox({
        type: 'inline',
    })
})

$(function() {
    $('.sandwich__recipe').fancybox({
        type: 'inline',
    })
})

// плавный переход к якорю
// $('a[href^="#"]').click(function() {
//     elementClick = $(this).attr("href");
//     destination = $(elementClick).offset().top;
//     $('body').animate({ scrollTop: destination }, 1000);
// });

// $(function () {
//     $('#sandwich-review').on('click', function(e){
//         e.preventDefault();
//     })
// })

// //  $(function() {
// //     $("#welcome").on("click","a", function (event) {
// //         event.preventDefault();
// //         var id  = $(this).attr('href'),
// //             top = $(id).offset().top;
// //         $('body,html').animate({scrollTop: top}, 1500);
// //     });
// // });

$(function() {
    $('.header_welcome').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#welcome').offset().top }, 1000);
        e.preventDefault();
    });
    $('.header_menu').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#menu').offset().top }, 1000);
        e.preventDefault();
    });
    $('.header_breakfast').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#breakfast').offset().top }, 1000);
        e.preventDefault();
    });
    $('.header_news').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#news').offset().top }, 1000);
        e.preventDefault();
    });
    $('.header_visit').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#visit').offset().top }, 1000);
        e.preventDefault();
    });
});