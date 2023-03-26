import $ from '../core'

$.prototype.dropdown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = $(this[i]).getAttr('id');
        $(this[i]).click(() => {
            $(`[data-toggle-id='${id}']`).fadeToggle(300);
        })
    }
};

$('.dropdown-toggle').dropdown();


{/* <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="SameSELECTOR"> Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="SameSELECTOR">
        <a href="#" class="dropdown-item">a 1</a>
        <a href="#" class="dropdown-item">a 2</a>
        <a href="#" class="dropdown-item">a 3</a>
    </div>
</div> */}