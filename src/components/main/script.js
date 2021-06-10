var popup = document.querySelector('.popup');
var overlay = document.querySelector('.popup__overlay');
var popupButton = document.querySelector('.slider__button');
var popupCloseButton = popup.querySelector('.popup__button');
var input = popup.querySelector('.form__input')

popupButton.addEventListener('click', function(){
    popup.classList.add('popup_open');
    overlay.classList.add('popup__overlay_show');
    input.focus();
})

popupCloseButton.addEventListener('click', function(){
    popup.classList.remove('popup_open');
    overlay.classList.remove('popup__overlay_show');
})

window.addEventListener('keydown', function(evt){
    if (evt.code === "Escape") {
        if (popup.classList.contains('popup_open')){
            popup.classList.remove('popup_open');
            overlay.classList.remove('popup__overlay_show');
        }
    }
})



var TabletHeader = document.querySelector('.tablet-header');
var btnTabletHeader = document.querySelector('.header__btn_tablet');
var btnCloseHeader = document.querySelector('.tablet-header__btn-close');


btnTabletHeader.addEventListener('click', function(){
    TabletHeader.classList.add('tablet-header_open');
})

btnCloseHeader.addEventListener('click', function(){
    TabletHeader.classList.remove('tablet-header_open');
})

