
// VARIABLES
let menuOpen = false;
let menuProgressOpen = false;


// running auto functions
addClass([mainMenuBtn, progressMenuBtn, langBtn, logo], 'invis-fade');



// FUNCTIONS
const menuOpenFunc = (lable) => {
    let buttons = [];
    if(window.innerWidth < 768){
        buttons = [progressMenuBtn, langBtn, logo]
    } else {
        buttons = [progressMenuBtn, langBtn]
    };

    // remove scrolling
    removeScroll();
        
    // hide buttons and reveal menu
    buttons.forEach(button => {
        button.style.opacity = 0;
    });

    // show menu lable
    setTimeout(() => {
        menuLable.innerText = lable;
        removeClass([menuLable], 'd-none');
    }, 500);

    // change menu bars to times
    mainMenuBtn.innerHTML = `<i class="ex fas fa-times"></i>`;
    // give menubtn outline
    mainMenuBtn.classList.add('white-outline');
    // remove header whiteness
    header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
};

const menuCloseFunc = () => {
    let buttons = [progressMenuBtn, langBtn, logo];

    // allow scrolling again
    addScroll();

    // reveal buttons and hide menu
    buttons.forEach(button => {
        button.style.opacity = 1;
    })
    addClass([menuLable], 'd-none');
    
    // change menu times to bars
    mainMenuBtn.innerHTML = `<i class="fas fa-bars"></i>`;

    // remove menubtn outline
    mainMenuBtn.classList.remove('white-outline');

    // bring bac header whiteness
    header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
}


// open and close main menu
const openMain = () => {
    searchForm.reset();
    searchSpace.innerHTML = '';
    if(!menuOpen){
        menuOpenFunc('Menu');      
        removeClass([mainMenu], 'offscreen');
        menuOpen = true;
    } else {
        menuCloseFunc();
        addClass([mainMenu], 'offscreen');
        menuOpen = false;
    }
};

// open and close progress menu
const openProgress = () => {
    if(!menuProgressOpen){
        menuOpenFunc('Your Progress');
        removeClass([progressMenu], 'offscreen');
        menuProgressOpen = true;
        addClass([mainMenuBtn],'progress-close');
        removeClass([mainMenuBtn],'btn-secondary');
        addClass([mainMenuBtn],'btn-warning');
        updatePercentage();
    } else {
        menuCloseFunc();
        addClass([progressMenu], 'offscreen');
        menuProgressOpen = false;
        removeClass([mainMenuBtn],'progress-close');
        addClass([mainMenuBtn],'btn-secondary');
        removeClass([mainMenuBtn],'btn-warning');
    }
}




// event listeners
mainMenuBtn.addEventListener('click', () => {
    if(!mainMenuBtn.classList.contains('progress-close')){
        openMain();
    } else {
        openProgress();
    }
    
});
mainScreen.addEventListener('click', () => {
    openMain();
});
mainMenu.addEventListener('click', e => {
    if(e.target.tagName === 'A' || e.target.tagName === 'LI' || e.target.classList.contains('chapter-shortcut')){
        openMain();
    }
});

progressMenuBtn.addEventListener('click', () => {
    updateLocalStorage();
    startProgressData();
    openProgress();
})
progressScreen.addEventListener('click', () => {
    openProgress()
})
progressMenu.addEventListener('click', e => {
    if(e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.tagName === 'I'){
        openProgress();
    }
})

// function for additional menu
const openAdditionalContent = target => {
    removeScroll();
    setTimeout(() => {
        addClass([additionalMenu], 'move-left');
    }, 600);
    removeClass([additionalMenu.querySelector(`#${target}`)], 'd-none');
    
}

const closeAdditionalContent = () => {
    let cards = glossaryText.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = '';
    })
    removeClass(cards, 'highlighted');
    glossaryForm.reset();
    removeClass([additionalMenu], 'move-left');
    addScroll();
    addClass(additionalMenu.querySelectorAll('.text-content'), 'd-none');
}