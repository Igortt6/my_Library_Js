import $ from '../core';

$.prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {
        const target = $(this[i]).getAttr('data-target');

        $(this[i]).click((e) => {
            console.log(this.calcScroll())
            e.preventDefault();
            if (document.body.offsetHeight > document.documentElement.clientHeight) {
                document.body.style.marginRight = `${this.calcScroll()}px`;
                $('.modal').moveX(-(this.calcScroll() / 2))
            }

            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });
    }

    $('[data-close]').click(() => {
        $('.modal').fadeOut(300);
        document.body.style.overflow = '';
        document.body.style.marginRight = '0';
        $('.modal').moveX();
    });


    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(300);
            document.body.style.overflow = '';
            document.body.style.marginRight = '0';
            $('.modal').moveX();
        }
    });
};

// Якщо є зміщення в сторону, міщюємо.
$.prototype.moveX = function (move) {
    for (let i = 0; i < this.length; i++) {
        if (!move) {
            this[i].style.transform = '';
        } else {
            this[i].style.transform = `TranslateX(${move}px)`;
        }

    }
}

// Вираховуємо скільки пікселів займає скрол
$.prototype.calcScroll = function () {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';


    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

$('[data-toggle="modal"]').modal();

