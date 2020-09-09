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