

// show hide navigation 
var showHamburger = true
$('.page-header .hamburger').click(function () {
    $('.search-wrapper').slideUp("slow")
    showSearch = true;

    if (showHamburger) {
        $('.mask-header').css('display', 'block');
        $('.navigation').slideDown("slow");
        $('body').addClass("no-scroll");
        showHamburger = false;
    } else {
        $('.mask-header').css('display', 'none');
        $('.navigation').slideUp("slow");
        $('body').removeClass("no-scroll");
        showHamburger = true;
    }
});

var showSearch = true;
$('.page-header .search').click(function () {
    $('.navigation').slideUp("slow");
    showHamburger = true;

    if (showSearch) {
        $('.mask-header').css('display', 'block');
        $('.search-wrapper').slideDown("slow");
        $('body').addClass("no-scroll");
        showSearch = false;
    } else {
        $('.mask-header').css('display', 'none');
        $('.search-wrapper').slideUp("slow");
        $('body').removeClass("no-scroll");
        showSearch = true;
    }
});

$('.mask-header').click(function () {
    $('.mask-header').css('display', 'none');
    $('.search-wrapper').slideUp("slow");
    $('.navigation').slideUp("slow");
    showSearch = true;
    showHamburger = true;
})

// end


// show Breadcrumbs 
var showBreadcrumbs = true;
$('.breadcrumbs-wrapper').click(function () {
    // console.log('click');
    if (showBreadcrumbs) {
        $('.breadcrumbs-wrapper .cate').slideDown("slow");
        $('.breadcrumbs-wrapper .mask-breadcrumbs').css('display', 'block');
        $('body').addClass("no-scroll");
        showBreadcrumbs = false;
    } else {
        $('.breadcrumbs-wrapper .cate').slideUp("slow");
        $('.breadcrumbs-wrapper .mask-breadcrumbs').css('display', 'none');
        $('body').removeClass("no-scroll");
        showBreadcrumbs = true;
    }
});


// show sub menu
var showSubMenu = true;
$(".has-sub").click(function () {
    if (showSubMenu) {
        $(this).children("ul").slideToggle();
        $('.icon-arrow').addClass('rotate');
        showSubMenu = false;
    } else {
        $(this).children("ul").slideToggle();
        $('.icon-arrow').removeClass('rotate');
        showSubMenu = true;
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

//Click event scroll to top button jquery
var backToTop = $('.back-to-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        backToTop.addClass('show');
    } else {
        backToTop.removeClass('show');
    }
});
backToTop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});

