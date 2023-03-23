import $ from '../core';
$.prototype.animateOverTime = function (duration, callBack, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;                                   // Задаємо час початку
        }

        let timeElapsed = time - timeStart;                     // Час дії анімації
        let complection = Math.min(timeElapsed / duration, 1);  // від  0 до 1

        callBack(complection)
        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }
    return _animateOverTime;
}

$.prototype.fadeIn = function (duration, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';             //параметр за умовчанням. Блок якщо не передано дісплей

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;                // зінює opacity в залежності від виранованого complection
        };

        const ani = this.animateOverTime(duration, _fadeIn, fin)
        requestAnimationFrame(ani);
    }

    return this;
}

$.prototype.fadeOut = function (duration, fin) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {

            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none'
            }
        };

        const ani = this.animateOverTime(duration, _fadeOut, fin)
        requestAnimationFrame(ani);
    }

    return this;
}