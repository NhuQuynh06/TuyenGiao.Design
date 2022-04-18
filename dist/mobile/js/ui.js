

// show hide navigation 
var showHamburger = true
$('.page-header .hamburger').click(function () {
    $('.search-wrapper').slideUp("slow")
    showSearch = true;

    if (showHamburger) {
        $('.mask').css('display', 'block');
        $('.navigation').slideDown("slow");
        showHamburger = false;
    } else {
        $('.mask').css('display', 'none');
        $('.navigation').slideUp("slow");
        showHamburger = true;
    }
});

var showSearch = true;
$('.page-header .search').click(function () {
    $('.navigation').slideUp("slow");
    showHamburger = true;

    if (showSearch) {
        $('.mask').css('display', 'block');
        $('.search-wrapper').slideDown("slow");
        showSearch = false;
    } else {
        $('.mask').css('display', 'none');
        $('.search-wrapper').slideUp("slow");
        showSearch = true;
    }
});

$('.mask').click(function () {
    $('.mask').css('display', 'none');
    $('.search-wrapper').slideUp("slow");
    $('.navigation').slideUp("slow");
    showSearch = true;
    showHamburger = true;
})

// end


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

// slick slider
$(document).ready(function () {
    $('.box-news .box-content').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
    });
});