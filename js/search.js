// glossary search form

glossarySearch.addEventListener('keyup', () => {
    let searchTerm = glossarySearch.value.toUpperCase();
    glossSearch(searchTerm);
});

const glossSearch = (searchTerm) => {
    let cards = glossaryText.querySelectorAll('.card');
    cards.forEach(card => {
        let text = card.textContent.toUpperCase();
        if(text.includes(searchTerm)){
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    })
}

glossaryForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

// main menu search form
searchFormInput.addEventListener('keyup', () => {
    searchSpace.innerHTML = '';
    let searchTerm = searchFormInput.value.toUpperCase();
    if(searchTerm){
        chapters.forEach(chapter => {
            let link = '';
            if(chapter.textContent.toUpperCase().includes(searchTerm)){
                let divs = chapter.querySelector('.chapter-text-inner').querySelectorAll('div');
                divs.forEach(div => {
                    let divContent = div.textContent.toUpperCase();
                    if(divContent.includes(searchTerm)){
                        let n = divContent.indexOf(searchTerm);
                        let result = div.textContent.substring(n-10, n + 200);
                        link += `
                        <p>
                            <span class="chapter-shortcut" data-target="${chapter.dataset.content}" data-shortcut="${div.id}">...${result}...</span>
                        </p>
                        <hr>
                        `;
                    }
                })
                searchSpace.innerHTML += `
                    <div class="card">
                        <div class="card-body">
                            <h4>${chapter.dataset.title}</h4>
                            <div class="card">
                                <div class="card-body">
                                    <p>${link}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        })
    }
    
    
})

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
})