import './libs/lib'

$('button').on('click', function () {
    $(this).toggleClass('active')
})

console.log($('.some').closest('.active'));
console.log($('.some').closest('.listItem').addClass('asdaasdasdssd'));
console.log($('body').siblings());


