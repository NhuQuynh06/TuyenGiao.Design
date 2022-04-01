$(window).scroll(function () {
    $('.header-thoinay .wrap-header').css('box-shadow', '0px 8px 16px rgba(0, 0, 0, 0.1)');
    var scroll = $(window).scrollTop();
    if (scroll === 0) {
        $('.header-thoinay .wrap-header').css('box-shadow', 'none');
    }
});
window.onload = function () {
    const width = $('.wrap-slide .col-8').width();
    console.log('width1', width);
    const left = width + 150
    $('.podcast-slide .prevArrow').css('left', -left)
    if (width < 300) {
        const left = width + 50
        $('.podcast-slide .prevArrow').css('left', -left)
    }
};
$(window).resize(function () {
    const width = $('.wrap-slide .col-8').width();
    console.log('width2', width);
    const left = width + 150
        $('.podcast-slide .prevArrow').css('left', -left)
});

// toggle podcast
let on = true
const $icon = $('.auto-play .text-2 i')
$('.auto-play').on('click', function (e) {
    e.preventDefault();
    if (on) {
        $icon.removeClass("fa-toggle-on");
        $icon.addClass("fa-toggle-off");
        $icon.css('color', '#343A40')
        on = false
    } else {
        $icon.addClass("fa-toggle-on");
        $icon.removeClass("fa-toggle-off");
        $icon.css('color', '#bd1723')
        on = true
    }
});

// scroll changes logo header
$(window).scroll(function () {
    $('.region-top-header .region-2 ul').css('display', 'none');
    $('.region-top-header .region-2 .logo-nhandan').css('display', 'block');
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll === 0) {
        $('.region-top-header .region-2 ul').css('display', 'flex');
        $('.region-top-header .region-2 .logo-nhandan').css('display', 'none');
    }
});

function shortenText() {
    $('.story__shorten').each(function () {
        var wordArray = $(this).html().split(' ');
        while ($(this).get(0).scrollHeight > $(this).get(0).offsetHeight) {
            wordArray.pop();
            $(this).html(wordArray.join(' ') + '...');
        }
    });
}

shortenText();

$(".site-header .search-button").click(function (e) {
    const $this = $(".site-header .search-button");
    const $searchInput = $(".site-header .search-form");
    $this.css('display', 'none');
    $searchInput.css('display', 'block');
});

$(".region-1 .wrap-menu").click(function (e) {
    $(".region-nav").toggle();
});

$(".region-nav").click(function (e) {
    $(".mask").toggle();
});

//set button id on click to hide first modal
$(".register").on("click", function () {
    $('#modalLogin').modal('hide');
    setTimeout(function () {
        $("body").addClass("modal-open");
        $("body").css("bpadding-right", "17px");
    }, 500);
});

$(".forgot-password").on("click", function () {
    $('#modalLogin').modal('hide');
    setTimeout(function () {
        $("body").addClass("modal-open");
        $("body").css("bpadding-right", "17px");
    }, 500);
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

$(".wrap-podcast .fa-pause-circle").click(function () {
    $(".fa-play-circle").css("display", "block");
    $(".fa-pause-circle").css("display", "none");
});

$(".wrap-podcast .fa-play-circle").click(function () {
    $(".fa-play-circle").css("display", "none");
    $(".fa-pause-circle").css("display", "block");
});

$('.podcast-slide').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    prevArrow: "<span class='prevArrow'></span>",
    nextArrow: "<span class='nextArrow'></span>",
    responsive: [
        {
            breakpoint: 2090,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1980,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1390,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});

$('.box-style-6 .box-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    prevArrow: "<span class='prevArrow'><i class='fal fa-long-arrow-left'></i></span>",
    nextArrow: "<span class='nextArrow'><i class='fal fa-long-arrow-right'></i></span>"
});

$('.box-style-19 .box-content').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    autoplay: true,
    centerPadding: '173px',
    prevArrow: "<span class='prevArrow'></span>",
    nextArrow: "<span class='nextArrow'></span>"
});

$('.box-style-28 .box-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
});

$('.region-hot-news .list-hot-news').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    dots: false,
});


$(".podcast .text").click(function (e) {
    e.preventDefault();
    const $this = $(e.target);
    const chosenTab = $this.attr('data-link');
    $('.podcast .text').removeClass('active');
    $this.addClass('active');
    $('.podcast .box-content ').find('.tab-pane').removeClass('active')
    console.log(chosenTab);
    $('.podcast .box-content .' + chosenTab).addClass('active');
});
