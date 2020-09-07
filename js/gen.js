// VARIABLES
// THE MENU
const header = document.querySelector('header');
const mainMenuBtn = document.querySelector('#menu');
const progressMenuBtn = document.querySelector('#progress-menu');
const langBtn = document.querySelector('#lang');
const logo = document.querySelector('#logo');

const mainMenu = document.querySelector('nav');
const menuContent = mainMenu.querySelector('#main-menu-accordian');
const mainMenuLinks = mainMenu.querySelectorAll('a');
const mainScreen = document.querySelector('#mainScreen');
const menuLable = document.querySelector('#menulable');

const nextButtons = document.querySelectorAll('.btn-next');
const readitButtons = document.querySelectorAll('.read-it');



// GENERAL FUNCTIONS

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

// remove vertical scroll from body
const removeScroll = () => {
    document.body.classList.add('modal-open');
}

// add vertical scroll to body
const addScroll = () => {
    document.body.classList.remove('modal-open');
}

// add large class to all buttons if window size is appropriate
const largeButtons = () => {
    if(window.innerWidth > 992){
        addClass([mainMenuBtn, progressMenuBtn, langBtn], 'btn-lg');
         nextButtons.forEach(button => {
             addClass([button], 'btn-lg');
         });
         readitButtons.forEach(button => {
             addClass([button], 'btn-lg');
         });
     } else {
        removeClass([mainMenuBtn, progressMenuBtn, langBtn], 'btn-lg');
         nextButtons.forEach(button => {
             removeClass([button], 'btn-lg');
         });
         readitButtons.forEach(button => {
             removeClass([button], 'btn-lg');
         });
     }
};




// INITIAL ACTIONS

// make buttons large on big screen
largeButtons();



// event listener to check window resize
window.addEventListener('resize', () => {
    largeButtons();
});




