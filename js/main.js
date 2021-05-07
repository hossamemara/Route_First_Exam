
/* ____________________ Color Mode Start ____________________ */
var myColors = ['#f0e4d7', '#f5c0c0', '#ff7171', '#9fd8df', '#206a5d', '#81b214', '#ffcc29', '#f5f7b2', '#1cc5dc', '#cf0000', '#890596']

for (var i = 0; i < myColors.length; i++) {
    $('.colors').eq(i).css('backgroundColor', myColors[i])
}


$('.colors').click(function () {
    var mode = $(this).css('backgroundColor')
    console.log(mode);
    $('.mode-change').css('color', mode)
})

var modeOptionsWidth = $('.color-options').outerWidth();

$('.mode-options').css({ 'right': -modeOptionsWidth })

$('.mode-sider').click(function () {

    if ($('.mode-options').css('right') == '0px') {
        $('.mode-options').animate({ 'right': -modeOptionsWidth }, 500)
    }
    else {
        $('.mode-options').animate({ 'right': '0px' }, 500)
    }

})
/* ____________________ Color Mode End ____________________ */


/* ____________________ On Scroll Enents Start ____________________ */

/* _____________ Change Nav Bar Background Color  _____________ */

$(window).scroll(function () {
    let scrollOffset = $(window).scrollTop();
    let carouselCaption = $('.carousel-caption').offset().top;
    if (scrollOffset > carouselCaption - 100) {
        $('.navbar').css({ 'backgroundColor': '#708090', 'transition': "0.5s all" })
    }
    else {

        $('.navbar').css({ 'backgroundColor': 'transparent', 'transition': "0.5s all" })

    }
})

/* _____________ Move Smoothly To Sections  _____________ */

$('.nav-link').click(function () {
    let linkHref = $(this).attr('href');
    let linkHrefOffset = $(linkHref).offset().top;
    $('body,html').animate({ scrollTop: linkHrefOffset }, 1000)
})

$('#scroll-me').click(function () {
    let linkHref = $(this).attr('href');
    let linkHrefOffset = $(linkHref).offset().top;
    $('body,html').animate({ scrollTop: linkHrefOffset }, 1000)
})


/* _____________ Back to Website Top  _____________ */

$(window).scroll(function () {
    let scrollOffset = $(window).scrollTop();

    let to_top_btn = $('#team').offset().top;
    if (scrollOffset > to_top_btn) {
        $('.to-top-btn').fadeIn(1000);;

    }
    else {
        $('.to-top-btn').fadeOut(1000);;

    }
})

$('.to-top-btn').click(function()
{
    $('body,html').animate({ scrollTop: 0 }, 500)
})