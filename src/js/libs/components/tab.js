import $ from '../core';

$.prototype.tab = function () {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            $(this[i])
                .addClass('tab-item--active')
                .siblings()
                .removeClass('tab-item--active')
                .closest('.tab')
                .find('.tab-content')
                .removeClass('tab-content--active')
                .eq($(this[i]).index())
                .addClass('tab-content--active');
        });
    }
};

// відстежуємо клік по понелі з табами. 
$('[data-tabpanel] .tab-item').tab();

{/* <div class="tab">
<div class="tab-panel" data-tabpanel>
    <div class="tab-item tab-item--active">Content 1</div>
    <div class="tab-item">Content 2</div>
    <div class="tab-item">Content 3</div>

</div>
<div class="tab-content tab-content--active">
    Text 1
    <br> <br>
    Text 1
</div>
<div class="tab-content">
    Text 2
    <br> <br>
    Text 2
    <br> <br>
    Text 2
</div>
<div class="tab-content">
    Text 3
</div>
</div> */}