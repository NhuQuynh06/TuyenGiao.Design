$(document).ready(function () {
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

    //Click event scroll to top button jquery
    var backToTop = $('.back-to-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            backToTop.addClass('show');
        } else {
            backToTop.removeClass('show');
        }
    });
    backToTop.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    
    // slider-for, slider-nav

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });


    $('.humburger-wrapper').click(function (e) {
        e.preventDefault();
        $('.humburger-wrapper .nav-sub').toggleClass('show');
    })

});