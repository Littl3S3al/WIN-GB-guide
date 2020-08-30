const body = document.querySelector('body');
const loadScrn = document.querySelector('.load');
const stripes = document.querySelectorAll('.stripe');
const loadTxt = document.querySelector('#loading');


body.classList.add('no-vertical-scroll');

window.addEventListener('load', () => {
    loadTxt.style.opacity = 0;
    let i = 0;
    const goToZero = setInterval(() => {
        stripes[i].classList.add('zero-height');
        i++;
        if(i  > stripes.length){
            clearInterval(goToZero);
        }
    }, 100);
    setTimeout(() => {
        body.classList.remove('no-vertical-scroll');
        loadScrn.classList.add('d-none');
    }, 1500);
})