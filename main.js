var ideas = [];
var newIdea;

var saveBtn = document.querySelector('.save-button');
var inputTitle = document.getElementById('title-input');
var inputBody = document.getElementById('body-input');
var form = document.querySelector('.form-style');
var cardTitle = document.querySelector('h5');
var cardBody = document.getElementById('card-text');
var ideaBoxContainer = document.querySelector('.idea-boxes-container');

form.addEventListener('input', hoverSaveBtn);

saveBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (inputTitle.value && inputBody.value) {
        saveIdea();
    }
})

function hoverSaveBtn() {
    if (inputTitle.value && inputBody.value) {
        activateSaveBtn();
    } else {
        deactivateSaveBtn();
    }
}

function activateSaveBtn() {
    saveBtn.classList.add("activeSaveBtn");
    saveBtn.classList.add("hover");
}

function deactivateSaveBtn() {
    saveBtn.classList.remove("hover");
    saveBtn.classList.remove("activeSaveBtn");
}

function saveIdea() {
    var newIdea = new Idea(inputTitle.value, inputBody.value);
    ideas.push(newIdea);
    renderCard(newIdea);
}

function renderCard(idea) {
    var ideacard = " ";
    ideacard = 
    `<article class="idea-box">
        <div class="card-top" id="card-header">
            <img src="./assets/star-active.svg" alt="red-star-icon" id="card-star">
            <img src="./assets/delete.svg" alt="white-delete-icon" id="delete-icon">
        </div>
        <div class="card-body" id="text-box-card">
            <h5>${idea.title}</h5>
            <p id="card-text">${idea.body}</p>
        </div>
        <div class="card-bottom" id="comment">
            <img src="./assets/comment.svg" alt="plus-icon" id="comment-plus-icon">
            <p id="white-comment">Comment</p>
        </div>    
    </article>`
    ideaBoxContainer.innerHTML += ideacard;
    clearInput();
}

function clearInput() {
    form.reset();
    deactivateSaveBtn();
}