
const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
    if (!selector) {
        return this; // {} пустий обʼєкт
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));           // додаємо в ЦЕЙ обʼєкт вибрані елементи
    this.length = document.querySelectorAll(selector).length;           // властивість з кількістю вибраних елементів
    return this;
}

$.prototype.init.prototype = $.prototype;                               // Записуємо в прототип функціі 30-36, прототип головної функції.  Це дає змогу використувувати на головній вункції $ всі методи функціі 30-36
window.$ = $;                       // Записуємо функцію в глобальний обʼєкт window
export default $;
