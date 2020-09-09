const startProgressData = () => {
    localStorage.setItem('chapterTracker', JSON.stringify(chapterTracker));
};

const retrieveProgressData = () => {
    chapterTracker = JSON.parse(localStorage.getItem('chapterTracker'));
    // console.log(chapterTracker);
    for(i = 0; i < chapterTracker.detailChapters.length; i ++){
        let el = progressMenu.querySelector(`#${chapterTracker.detailChapters[i]}`);
        addClass([el], 'completed');
    }
};

const updateLocalStorage = () => {
    let allCompletedSections = progressMenu.querySelectorAll('.completed');
    chapterTracker.detailChapters = [];
    if(allCompletedSections){
        allCompletedSections.forEach(section => {
            chapterTracker.detailChapters.push(section.id);
        })
    }
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

const updatePercentage = () => {
    let done = chapterTracker.detailChapters.length;
    let total = progressMenu.querySelectorAll('.chapter-shortcut').length;
    let percentage = Math.floor(done/total*100);
    progressPercentage.innerText = percentage + '%';
    progressPercentageBar.style.width = percentage + '%';
}



