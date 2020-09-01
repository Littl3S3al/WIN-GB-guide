

let menuOpen = false;


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

// running auto functions
addClass([mainMenuBtn, progressMenuBtn, langBtn, logo], 'invis-fade');


// event listeners
mainMenuBtn.addEventListener('click', () => {
    openMain();
})
mainScreen.addEventListener('click', () => {
    openMain();
})
mainMenu.addEventListener('click', e => {
    if(e.target.tagName === 'A'){
        openMain();
    }
})
