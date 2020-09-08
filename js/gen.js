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

// THE PROGRESS MENU
const progressMenu = document.querySelector('#progress-menu-container');
const progressScreen = document.querySelector('#progress-screen');
const progressContent = document.querySelector('#progress-icons');
const progressPercentage = document.querySelector('#progress-percentage');
const progressPercentageBar = document.querySelector('.progress-detailed');
const resetProgress = document.querySelector('#reset');

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


// prevent zoom
// $(document).keydown(function(event) {
//     if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
//             event.preventDefault();
//          }
//         // 107 Num Key  +
//         // 109 Num Key  -
//         // 173 Min Key  hyphen/underscor Hey
//         // 61 Plus key  +/= key
// });

// $(window).bind('mousewheel DOMMouseScroll', function (event) {
//         if (event.ctrlKey == true) {
//         event.preventDefault();
//         }
// });



