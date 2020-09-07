// VARIABLES
const chapters = document.querySelectorAll('.chapter-text');
const intros = document.querySelectorAll('.chapter-intro');
const covers = document.querySelectorAll('.chapter-image');
const closeChapterBtns = document.querySelectorAll('.close-chapter');
let whichChapter;




// FUNCTIONS

// function to match selected content to nodelist of all content
const findChapterContent = (target, nodelist) => {
    for (i = 0; i < nodelist.length; i ++){
        if(nodelist[i].dataset.content === target){
            return nodelist[i];
        }
    }
}

// open chapter functions
const openChapter = (current) => {
    // get elements for the chapter
    let section = document.querySelector(`#${current}`);
    let chapter = findChapterContent(current, chapters);
    let intro = findChapterContent(current, intros);
    let cover = findChapterContent(current, covers);

    // scroll down to the chapter
    section.scrollIntoView();
    // move chapter content, intro and cover to the left and swap buttons out
    setTimeout(() => {
        addClass([chapter], 'move-right')
        addClass([intro, cover], 'move-more-right');
        hideShowButtons(intro.querySelector('.chapter-buttons'));
        hideShowButtons(intro.querySelector('.open-chapter-buttons'));
        addClass([mainMenuBtn, progressMenuBtn, langBtn], 'btn-dark');
    }, 500);
    
    // stop body scroll
    removeScroll();

    // log which chapter is currently open so that function can close that chapter
    whichChapter = current;
};

// close chapter fucntions
const closeChapter = () => {
    let chapter = findChapterContent(whichChapter, chapters);
    let intro = findChapterContent(whichChapter, intros);
    let cover = findChapterContent(whichChapter, covers);
    let currentNumber = parseInt(whichChapter.substring(whichChapter.length - 1, whichChapter.length));
    whichChapter = false;

    hideShowButtons(intro.querySelector('.chapter-buttons'));
    hideShowButtons(intro.querySelector('.open-chapter-buttons'));
    removeClass([chapter], 'move-right');
    removeClass([intro, cover], 'move-more-right');
    removeClass([mainMenuBtn, progressMenuBtn, langBtn], 'btn-dark');
    addScroll();

    // chapter tracker function
    chapterTracker.openedChapters[currentNumber-1] = true;
    startProgressData();
    updateProgress();
    console.log(JSON.parse(localStorage.getItem('chapterTracker')));
};

// scroll to specific content when chapter is open
const goToContent = (shortcut) => {
    let chapter = findChapterContent(whichChapter, chapters);
    let bookmark = chapter.querySelector(`#${shortcut}`);
    let topPos = bookmark.offsetTop;
    chapter.scrollTop = topPos;
};

// toggle chapter hidden class
const hideShowButtons = (content) => {
    if(content.classList.contains('hidden-buttons')){
        content.classList.remove('hidden-buttons')
    } else {
        content.classList.add('hidden-buttons');
    }
};





// EVENT LISTENERS
document.body.addEventListener('click', (e) => {
    // onclick function for read it buttons
    if(e.target.classList.contains('read-it')){
        let current = e.target.dataset.target;
        openChapter(current);
    }
    // onclick function for chapter shortcut buttons as well as menu shortcut links
    if(e.target.classList.contains('chapter-shortcut')){
        if(whichChapter !== e.target.dataset.target && whichChapter){
            console.log('close');
            closeChapter();
        };
        let current = e.target.dataset.target;
        let shortcut = e.target.dataset.shortcut;
        openChapter(current);
        setTimeout(() => {
            goToContent(shortcut);
        }, 1000);
    }
    // onclick funtion for open chapter buttons
    if(e.target.classList.contains('chapter-link')){
        let link = e.target.dataset.link;
        goToContent(link);
    }
    
    // check if menu has been clicked on
    if(e.target.classList.contains('menu-link')){
        if(whichChapter !== e.target.dataset.target){
            closeChapter();
        };
    }

    // check if next or previous buttons have been clicked on (the ones showing when chapter is open)
    if(e.target.classList.contains('btn-next')){
        if(whichChapter !== e.target.dataset.target){
            closeChapter();
        };
    }
})

// event listener for close buttons
// this wasn't working in the usual way so I had to set up individual event listeners
closeChapterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        closeChapter();
    })
})
