import $ from './libs/lib';

$('#first').on('click', () => {
    $('[data-text="first"]').fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('[data-text="second"]').fadeToggle(800);
});

$('[data-count="all"]').on('click', () => {
    $('.text').fadeToggle(800);
});