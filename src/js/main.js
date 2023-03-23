import $ from './libs/lib';

$('#first').on('click', () => {
    $('[data-text="first"]').fadeOut(800);
});

$('[data-count="second"]').on('click', () => {
    $('[data-text="second"]').fadeOut(800);
});

$('[data-count="all"]').on('click', () => {
    $('.text').fadeOut(800);
});