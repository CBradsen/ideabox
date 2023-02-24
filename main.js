var ideas = [];
var newIdea;

var saveBtn = document.querySelector('.save-button');
var inputTitle = document.getElementById('title-input');
var inputBody = document.getElementById('body-input');
var form = document.querySelector('.form-style');
var cardTitle = document.querySelector('h5');
var cardBody = document.getElementById('card-text');

form.addEventListener('input', hoverSaveBtn);

saveBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (inputTitle.value && inputBody.value) {
        saveIdea();
    }
})

function hoverSaveBtn() {
    if (inputTitle.value && inputBody.value) {
        saveBtn.classList.add("activeSaveBtn");
        saveBtn.classList.add("hover");
    } else {
        saveBtn.classList.remove("hover");
        saveBtn.classList.remove("activeSaveBtn");
    }
}

function saveIdea() {
    var newIdea = new Idea(inputTitle.value, inputBody.value);
    ideas.push(newIdea);
    renderCard(newIdea);
}

function renderCard(idea) {
    cardTitle.innerText = idea.title;
    cardBody.innerText = idea.body;
    clearInput();
}

//SAVE BTN:
    // render that card on the DOM (renderToDOM function)
    // clear input fields (clearInputFields function) when clicking save button