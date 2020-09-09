let current;
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
const openChapter = () => {
    // get elements for the chapter
    let section = document.querySelector(`#${current}`);
    let chapter = findChapterContent(current, chapters);
    let intro = findChapterContent(current, intros);
    let cover = findChapterContent(current, covers);

    // hide intro text
    intro.querySelectorAll('p').forEach(p => {
        addClass([p], 'd-none');
    });
    // make intro number small
    addClass([intro.querySelector('.number')], 'number-smaller');

    // scroll down to the chapter
    section.scrollIntoView();

    // move chapter content, intro and cover to the left and swap buttons out
    setTimeout(() => {
        addClass([chapter], 'move-right')
        addClass([intro, cover], 'move-more-right');
        addClass([intro.querySelector('.chapter-buttons')], 'hidden-buttons');
        removeClass([intro.querySelector('.open-chapter-buttons')], 'hidden-buttons');
        addClass([mainMenuBtn, progressMenuBtn, langBtn], 'btn-dark');
    }, 500);
    
    // stop body scroll
    removeScroll();

    // log which chapter is currently open so that function can close that chapter
    whichChapter = current;

     // make first progress completed
    //  addClass([progressMenu.querySelector(`#progress-${current}`)], 'completed');
 
     // event lister for scrolling and if elements come into view then make their progress completed
     chapter.addEventListener('wheel', () => {
         let allSections = chapter.querySelectorAll('h1');
         allSections.forEach(section => {
             if(section.getBoundingClientRect().bottom <= window.innerHeight*0.8 && section.getBoundingClientRect().top >= 0){
                 let sectionNo = section.id;
                 let id = progressMenu.querySelector(`#${current}-${sectionNo}`);
                 if(id){
                     addClass([id], 'completed');
                 }
             }
         })
     });

     chapter.addEventListener('touchmove', () => {
        let allSections = chapter.querySelectorAll('h1');
        allSections.forEach(section => {
            if(section.getBoundingClientRect().bottom <= window.innerHeight*0.8 && section.getBoundingClientRect().top >= 0){
                let sectionNo = section.id;
                let id = progressMenu.querySelector(`#${current}-${sectionNo}`);
                if(id){
                    addClass([id], 'completed');
                }
            }
        })
    });

    //  update percentage on the progress menu
     updatePercentage();
   
    
};

// close chapter fucntions
const closeChapter = () => {

    let chapter = findChapterContent(whichChapter, chapters);
    let intro = findChapterContent(whichChapter, intros);
    let cover = findChapterContent(whichChapter, covers);
    let currentNumber = parseInt(whichChapter.substring(whichChapter.length - 1, whichChapter.length));
    whichChapter = false;

    // show intro text
    intro.querySelectorAll('p').forEach(p => {
        removeClass([p], 'd-none');
    });

    // make intro number bg again
    removeClass([intro.querySelector('.number')], 'number-smaller');

    removeClass([intro.querySelector('.chapter-buttons')], 'hidden-buttons');
    addClass([intro.querySelector('.open-chapter-buttons')], 'hidden-buttons');
    removeClass([chapter], 'move-right');
    removeClass([intro, cover], 'move-more-right');
    removeClass([mainMenuBtn, progressMenuBtn, langBtn], 'btn-dark');
    addScroll();

    // chapter tracker function
    chapterTracker.openedChapters[currentNumber-1] = true;
    updateLocalStorage();
    startProgressData();
    updateProgress();
    // console.log(JSON.parse(localStorage.getItem('chapterTracker')));
       
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
        current = e.target.dataset.target;
        openChapter();
    }
    // onclick function for chapter shortcut buttons as well as menu shortcut links
    if(e.target.classList.contains('chapter-shortcut')){
        if(whichChapter !== e.target.dataset.target && whichChapter){
            console.log('close');
            closeChapter();
        };
        current = e.target.dataset.target;
        let shortcut = e.target.dataset.shortcut;
        openChapter();
        setTimeout(() => {
            goToContent(shortcut);
        }, 1000);
    }
    if(e.target.tagName === 'I' && e.target.parentElement && e.target.parentElement.classList.contains('chapter-shortcut')){
        let actualTarget = e.target.parentElement;
        if(whichChapter !== actualTarget.dataset.target && whichChapter){
            console.log('close');
            closeChapter();
        };
        current = actualTarget.dataset.target;
        let shortcut = actualTarget.dataset.shortcut;
        openChapter();
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
        if(whichChapter !== e.target.dataset.target && whichChapter){
            closeChapter();
        };
    }

    // check if next or previous buttons have been clicked on (the ones showing when chapter is open)
    if(e.target.classList.contains('btn-next')){
        if(whichChapter !== e.target.dataset.target && whichChapter){
            closeChapter();
        };
    }

    // reset progress menu
    if(e.target === resetProgress){
        e.target.innerHTML = 'Are you sure? <br> <button class="btn btn-danger" id="sure-to-reset">yes</button> <button class="btn btn-primary" id="dont-reset">no</button>'
    }
    if(e.target.id === "sure-to-reset"){
        localStorage.clear();
        location.reload();
    }
    if(e.target.id === "dont-reset"){
        resetProgress.innerHTML = 'Want to start over? Reset your progress.'
    }

    // additional menu
    if(e.target.classList.contains('additional-link')){
        openAdditionalContent(e.target.dataset.target);
    };
    if(e.target.classList.contains('close-addition') || e.target.id === "additional-screen"){
        closeAdditionalContent();
    }
    if(e.target.tagName === 'I' && e.target.parentElement && e.target.parentElement.classList.contains('close-addition')){
        closeAdditionalContent();
    }

    // click on glossary term
    if(e.target.classList.contains('gloss-link')){
        openAdditionalContent('glossary');
        let searchTerm = e.target.dataset.target;
        let searchResult = glossary.querySelector(`#glossary-${searchTerm}`);
        let topPos = searchResult.offsetTop;
        additionalScrollable.scrollTop = topPos;
        addClass([searchResult], 'highlighted');
    }
    
})

// event listener for close buttons
// this wasn't working in the usual way so I had to set up individual event listeners
closeChapterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        closeChapter();
    })
})
