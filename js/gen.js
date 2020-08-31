const header = document.querySelector('header');
const mainMenuBtn = document.querySelector('#menu');
const progressMenuBtn = document.querySelector('#progress-menu');
const langBtn = document.querySelector('#lang');
const logo = document.querySelector('#logo');

const mainMenu = document.querySelector('nav');
const mainMenuLinks = mainMenu.querySelectorAll('a');
const mainScreen = document.querySelector('#mainScreen');
const menuLable = document.querySelector('#menulable');
let menuOpen = false;

const beginBtn = document.querySelector('#beginBtn');


var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

// add class
const addClass = (array, cssClass) => {
    array.forEach(item =>{
        item.classList.add(cssClass);
    });
}

// remove class
const removeClass = (array, cssClass) => {
    array.forEach(item =>{
        item.classList.remove(cssClass);
    });
}


if(window.innerWidth > 992){
    addClass([mainMenuBtn, progressMenuBtn, langBtn, beginBtn], 'btn-lg')
}