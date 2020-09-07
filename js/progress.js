

const progressBar = document.querySelectorAll('.progress');
const progressDots = document.querySelectorAll('.dot');

let trackedChapters = 0;
// setting up the progress functions
let chapterTracker = {
    openedChapters: [
        false, false, false, false, false, false
    ]
};

const startProgressData = () => {
    localStorage.setItem('chapterTracker', JSON.stringify(chapterTracker));
};
const retrieveProgressData = () => {
    chapterTracker = JSON.parse(localStorage.getItem('chapterTracker'));
    // console.log(chapterTracker);
};

const updateProgress = () => {

    // counting the number of chapters visited for the progress bar at the bottom
    trackedChapters = 0;
    for(i = 0; i < chapterTracker.openedChapters.length; i ++){
        if(chapterTracker.openedChapters[i]){
            trackedChapters ++;
        }
    }

    
    
    // adjusting the styles on the progress bar at the bottom
    let barWidth = trackedChapters*(100/5);
    if(barWidth <= 100){
        progressBar.forEach(bar => {
            bar.style.width = `${barWidth}%`;
        });
    } else {
        progressBar.forEach(bar => {
            bar.style.width = '100%';
        });
    }
    for(i=0; i < trackedChapters; i++){
        progressDots[i].classList.add('completed');
    }
    if(trackedChapters <= 6){
        progressDots[trackedChapters].classList.add('current');
    }
};
const plusProgress = () => {
    startProgressData();
    updateProgress();
};
