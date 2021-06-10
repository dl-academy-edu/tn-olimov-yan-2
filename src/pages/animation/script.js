var TabletHeader = document.querySelector('.tablet-header');
var btnTabletHeader = document.querySelector('.header__btn_tablet');
var btnCloseHeader = document.querySelector('.tablet-header__btn-close');


btnTabletHeader.addEventListener('click', function(){
    TabletHeader.classList.add('tablet-header_open');
})

btnCloseHeader.addEventListener('click', function(){
    TabletHeader.classList.remove('tablet-header_open');
})