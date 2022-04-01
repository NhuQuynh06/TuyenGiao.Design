// $(window).scroll(function () {
// });

$(window).scroll(function () {
    $('.wrap-region').css('box-shadow', '0px 8px 16px rgba(0, 0, 0, 0.1)');
    var scroll = $(window).scrollTop();
    if (scroll === 0) {
        $('.wrap-region').css('box-shadow', 'none');
    }
});

$(".region-1 .hamburger").click(function (e) {
    $('.info-user').css('display', 'none');
    $(".region-nav").toggle();
    $(".mask").toggle();
});

$(".mask").click(function (e) {
    $(".region-nav").toggle();
    $(".mask").toggle();
});

// toggle icon volume
let on = true
const $icon = $(".podcast-page .wrap-podcast .mute-button i");
$icon.on('click', function (e) {
    console.log('log');
    e.preventDefault();
    if (on) {
        $icon.removeClass("fa-volume");
        $icon.addClass("fa-volume-mute");
        on = false
    } else {
        $icon.removeClass("fa-volume-mute");
        $icon.addClass("fa-volume");
        on = true
    }
});

// active nav-tab
const $navTabLink = $('.nav-tab .nav-tab__link a');
const $navTabContent = $('.nav-tab .nav-tab__content ');

$(".nav-tab .nav-tab__link a").click(function (e) {
    // INFO: prevent hash-jumping from anchor element
    e.preventDefault();
    const $this = $(e.target);
    const chosenTab = $this.attr('data-link');
    $navTabLink.removeClass('active');
    $this.addClass('active');
    $navTabContent.find('.tab-pane').removeClass('active')
    $('.nav-tab .nav-tab__content .' + chosenTab).addClass('active');
});

$('.box-style-2 .box-content').slick({
    centerMode: true,
    // centerPadding: '110px',
    slidesToShow: 1,
    infinite: true,
    dots: true,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    prevArrow: "<span class='prevArrow'></span>",
    nextArrow: "<span class='nextArrow'></span>",
    responsive: [
        {
            breakpoint: 769,
            settings: {
                centerPadding: '270px',
            }
        },
        {
            breakpoint: 668,
            settings: {
                centerPadding: '240px',
            }
        },
        {
            breakpoint: 617,
            settings: {
                centerPadding: '200px',
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerPadding: '170px',
            }
        },
        {
            breakpoint: 501,
            settings: {
                centerPadding: '110px',
            }
        },
        {
            breakpoint: 376,
            settings: {
                centerPadding: '110px',
            }
        },
        {
            breakpoint: 370,
            settings: {
                centerPadding: '100px',
            }
        },
        {
            breakpoint: 330,
            settings: {
                centerPadding: '80px',
            }
        },
        {
            breakpoint: 321,
            settings: {
                centerPadding: '10px',
            }
        },
    ]
});

$('.box-style-6 .box-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
});

$('.box-style-9 .box-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<span class='prevArrow'><i class='fal fa-long-arrow-left'></i></span>",
    autoplay: false,
    nextArrow: "<span class='nextArrow'><i class='fal fa-long-arrow-right'></i></span>"
});

$('.box-style-15 .box-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
});


$('.podcast .box-content').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 602,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 376,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$(".wrap-banner .text").click(function () {
    $(".box-filler").toggle();
});


$(".location-detail .wrap-menu").click(function () {
    $(".location-detail .wrap-menu .menu").toggle();
});

$(".region-3").click(function () {
    $(".info-user").toggle();
});

$(".nav-wrapper .d-flex").click(function (e) {
    const parent = $(e.target).parent();
    const subMenu = parent.siblings()[0];
    $(subMenu).toggle();
});

$('.box-style-28 .box-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
});
