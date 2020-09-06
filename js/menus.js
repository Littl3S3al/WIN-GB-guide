
// VARIABLES
let menuOpen = false;

// FOR EACH INTITAL FUNCTIONS

// populating the menu with the chapter content taken from html script const chapterContent
chapterContent.forEach(chapter => {
    menuContent.innerHTML += `
        <div class="chapter col-12">

            <div class="chapter-heading">
                <a href="#chapter-${chapter.number}" class="menu-link" data-target="chapter-${chapter.number}"><span>0${chapter.number}</span> ${chapter.chapter}</a>

                <span class="expand" data-toggle="collapse" data-target="#collapse${chapter.number}" aria-expanded="true" aria-controls="collapse${chapter.number}">
                +
                </span>
            </div>

            <div id="collapse${chapter.number}" class="chapter-content collapse" aria-labelledby="${chapter.chapter}" data-parent="#main-menu-accordian">
                <ul id="list-${chapter.number}">
                </ul>
            </div>
        </div>
    `;
})
chapterContent.forEach(chapter => {
    let i = 1;
    chapter.concepts.forEach(concept => {
        document.querySelector(`#list-${chapter.number}`).innerHTML += `
            <li class="chapter-shortcut" data-target="chapter-${chapter.number}" data-shortcut="section-${i}">${concept}</li>
        `;
        i++;
    })
})

// running auto functions
addClass([mainMenuBtn, progressMenuBtn, langBtn, logo], 'invis-fade');




// FUNCTIONS

// open main menu
const openMain = () => {
    // don't include logo on md screens for invis
    let buttons = [];
        if(window.innerWidth < 768){
            buttons = [progressMenuBtn, langBtn, logo]
        } else {
            buttons = [progressMenuBtn, langBtn]
    };

    if(!menuOpen){

        // remove scrolling
        removeScroll();
        
        // hide buttons and reveal menu
        buttons.forEach(button => {
            button.style.opacity = 0;
        })
        setTimeout(() => {
            removeClass([menuLable], 'd-none');
        }, 500);
        removeClass([mainMenu], 'offscreen');
        // change menu bars to times
        mainMenuBtn.innerHTML = `<i class="ex fas fa-times"></i>`;

        // give menubtn outline
        mainMenuBtn.classList.add('white-outline');

        // remove header whiteness
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        
        menuOpen = true;
    } else {
        // allow scrolling again
        addScroll();

        // reveal buttons and hide menu
        buttons.forEach(button => {
            button.style.opacity = 1;
        })
        addClass([menuLable], 'd-none');
        addClass([mainMenu], 'offscreen');
        // change menu times to bars
        mainMenuBtn.innerHTML = `<i class="fas fa-bars"></i>`;

        // remove menubtn outline
        mainMenuBtn.classList.remove('white-outline');

        // bring bac header whiteness
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)';

        menuOpen = false;
    }
}




// event listeners
mainMenuBtn.addEventListener('click', () => {
    openMain();
})
mainScreen.addEventListener('click', () => {
    openMain();
})
mainMenu.addEventListener('click', e => {
    if(e.target.tagName === 'A' || e.target.tagName === 'LI'){
        openMain();
    }
})
