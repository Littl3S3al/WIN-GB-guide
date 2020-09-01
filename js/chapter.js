const chapters = document.querySelectorAll('.chapter-text');
const intros = document.querySelectorAll('.chapter-intro');
const covers = document.querySelectorAll('.chapter-image');
let whichChapter;

const findChapterContent = (target, nodelist) => {
    for (i = 0; i < nodelist.length; i ++){
        if(nodelist[i].dataset.content === target){
            return nodelist[i];
        }
    }
}


const openChapter = (current) => {
    let section = document.querySelector(`#${current}`);
    let chapter = findChapterContent(current, chapters);
    let intro = findChapterContent(current, intros);
    let cover = findChapterContent(current, covers);

    section.scrollIntoView();
    setTimeout(() => {
        chapter.style.left = 0;
        addClass([intro, cover], 'move-left');
    }, 500)
    removeScroll();

    whichChapter = current;
};

const closeChapter = () => {
    let chapter = findChapterContent(whichChapter, chapters);
    let intro = findChapterContent(whichChapter, intros);
    let cover = findChapterContent(whichChapter, covers);

    chapter.style.left = '-100vw';
    removeClass([intro, cover], 'move-left');
    addScroll();
}

document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains('read-it')){
        let current = e.target.dataset.target;
        openChapter(current);
    }
    if(e.target.classList.contains('close-chapter')){
        closeChapter();
    }
})