import $ from '../core';

$.prototype.accordion = function (headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
            } else {
                this[i].nextElementSibling.style.maxHeight = "0px";
            }
        });
    }
};

$('.accordion-head').accordion();


// <div class="accordion mt-20 block-center">
//     <div class="accordion-head">
//         <span>Element</span>
//     </div>
//     <div class="accordion-content">
//         <div class="accordion-inner">
//             Content
//         </div>
//     </div>
//     <div class="accordion-head">
//         <span>Element</span>
//     </div>
//     <div class="accordion-content">
//         <div class="accordion-inner">
//             Content
//         </div>
//     </div>
// </div>