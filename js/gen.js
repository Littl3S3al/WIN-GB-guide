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

const searchForm = document.querySelector('#keyword-search-form');
const searchSpace = document.querySelector('#keyword-row');
const searchFormInput = document.querySelector('#keyword-search-form input');

// THE PROGRESS MENU
const progressMenu = document.querySelector('#progress-menu-container');
const progressScreen = document.querySelector('#progress-screen');
const progressContent = document.querySelector('#progress-icons');
const progressPercentage = document.querySelector('#progress-percentage');
const progressPercentageBar = document.querySelector('.progress-detailed');
const resetProgress = document.querySelector('#reset');

// ADDITIONAL RESOURCES MENU
const additionalMenu = document.querySelector('.additional-section');
const additionalScreen = document.querySelector('#additional-screen');
const additionalOptions = additionalMenu.querySelectorAll('.text-content');
const additionalScrollable = document.querySelector('.additional-content');

// THE GLOSSARY
const glossaryForm = document.querySelector('#glossary-search-form');
const glossaryText = document.querySelector('#glossary');
const glossarySearch = document.querySelector('#glossary-search-form input');

// LANDING PAGE
const openingScreens = document.querySelectorAll('.min-screen');
const title = document.querySelector('#landing text');

// CHAPTER CONTENT
const nextButtons = document.querySelectorAll('.btn-next');
const readitButtons = document.querySelectorAll('.read-it');

// CHAPTER VARIABLES
const chapters = document.querySelectorAll('.chapter-text');
const intros = document.querySelectorAll('.chapter-intro');
const covers = document.querySelectorAll('.chapter-image');
const closeChapterBtns = document.querySelectorAll('.close-chapter');
let whichChapter;

// PROGRESS TRACKING
const progressBar = document.querySelectorAll('.progress');
const progressDots = document.querySelectorAll('.dot');

let trackedChapters = 0;
// setting up the progress functions
let chapterTracker = {
    openedChapters: [
        false, false, false, false, false, false
    ],
    detailChapters: []
};

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
    if(window.innerWidth >= 992){
        addClass([mainMenuBtn, progressMenuBtn, langBtn], 'btn-lg');
        addClass(nextButtons, 'btn-lg');
        addClass(readitButtons, 'btn-lg');
        addClass(closeChapterBtns, 'btn-lg');
     } else {
        removeClass([mainMenuBtn, progressMenuBtn, langBtn], 'btn-lg');
        removeClass(nextButtons, 'btn-lg');
        removeClass(readitButtons, 'btn-lg');
        removeClass(closeChapterBtns, 'btn-lg');
     }
};




// animate all landing page elements for screen sizes
const animateIntro = () => {
    if(window.innerWidth >= 992){
        removeClass([openingScreens[1]], 'animate__fadeInTopRight');
        addClass([openingScreens[1]], 'animate__fadeInDown');

        removeClass([openingScreens[2]], 'animate__fadeInLeft');
        addClass([openingScreens[2]], 'animate__fadeInTopRight');

        removeClass([openingScreens[3]], 'animate__fadeInRight');
        addClass([openingScreens[3]], 'animate__fadeInBottomLeft');

        removeClass([openingScreens[4]], 'animate__fadeInBottomLeft');
        addClass([openingScreens[4]], 'animate__fadeInUp');
    }
}




// INITIAL ACTIONS

// make buttons large on big screen
largeButtons();
// animate screens correctly on big screen
animateIntro();


// event listener to check window resize
window.addEventListener('resize', () => {
    largeButtons();
    location.reload();
});

 



document.onmouseover = function() {
    //User's mouse is inside the page.
    window.innerDocClick = true;
}

document.onmouseleave = function() {
    //User's mouse has left the page.
    window.innerDocClick = false;
}

window.onhashchange = function() {
    if (!window.innerDocClick) {
        alert('back button')
    }
}