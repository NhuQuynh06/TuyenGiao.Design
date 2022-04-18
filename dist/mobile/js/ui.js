
$('.page-header .hamburger').click(function () {
    $('.search-wrapper').css('display', 'none');
    $('.navigation').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.page-header .search').click(function () {
    $('.navigation').css('display', 'none');
    $('.search-wrapper').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.navigation .mask').click(function () {
    $('.navigation').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.search-wrapper .mask').click(function () {
    $('.search-wrapper').slideToggle();
    $('body').toggleClass('no-scroll');
})

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
