import './libs/lib'

$('.press').on('click', function () {
    $(this).toggleClass('active')
})

console.log($('.some').closest('.active'));
console.log($('.some').closest('.listItem').addClass('asdaasdasdssd'));

$('.fadeOut').on('click', function () {
    $('.active').fadeOut(1500)
})

$('.fadeIn').on('click', function () {
    $('.active').fadeIn(1500)
})