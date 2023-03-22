import $ from "../core";

// змінює структуру Елементу. Також отримує елемент
$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

//отримуємо елемент за номером
$.prototype.eq = function (i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
}

//отримуємо номер елементу (число)
$.prototype.index = function () {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = (item) => {
        return item == this[0];
    }

    return childs.findIndex(findMyIndex);

};

// Шукає усі елементи. формує в масив
$.prototype.find = function (selector) {
    let numberOfItems = 0;                  //  загальна кількість елементів
    let conunter = 0;                       // кількість записаних елементів

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[conunter] = arr[j];
            conunter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

// повертає найбилжчого сусіда 
$.prototype.closest = function (selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        let length = this.length
        if (this[i].closest(selector)) {
            this[i] = this[i].closest(selector);
            counter++;
        } else {
            console.log(`This parent Class ${selector} is not found for used child Class`);
            length--;
        }
    }
    this.length = length;

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
}

// повертає Усіх сосідів, без наявності вказаного елемента.

$.prototype.siblings = function () {
    let numberOfItems = 0;                  //  загальна кількість елементів
    let conunter = 0;                       // кількість записаних елементів

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }
            this[conunter] = arr[j];
            conunter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
}