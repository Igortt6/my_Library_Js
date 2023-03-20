import './libs/lib'

$('button').on('click', function () {
    $(this).toggleClass('active')
})

console.log($('button').html('new innerHTML'));
