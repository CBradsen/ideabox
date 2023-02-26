var ideas = [];
var newIdea;

var saveBtn = document.querySelector('.save-button');
var inputTitle = document.getElementById('title-input');
var inputBody = document.getElementById('body-input');
var form = document.querySelector('.form-style');
var ideaBoxContainer = document.querySelector('.idea-boxes-container');
var searchBar = document.getElementById('searchbar');

form.addEventListener('input', hoverSaveBtn);
ideaBoxContainer.addEventListener('click', handleCard);
// searchBar.addEventListener('keyup', filterCards);
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
    renderCard();
}

function renderCard() {
    ideaBoxContainer.innerHTML = ' ';
    for (var i = 0; i < ideas.length; i++) {
        ideaBoxContainer.innerHTML += 
        `<article class="idea-box" id="${ideas[i].id}">
            <div class="card-top" id="card-header">
                <img src="./assets/star.svg" alt="red-star-icon" id="card-star">
                <img src="./assets/delete.svg" alt="white-delete-icon" id="delete-icon">
            </div>
            <div class="card-body" id="text-box-card">
                <h5>${ideas[i].title}</h5>
                <p id="card-text">${ideas[i].body}</p>
            </div>
            <div class="card-bottom" id="comment">
                <img src="./assets/comment.svg" alt="plus-icon" id="comment-plus-icon">
                <p id="white-comment">Comment</p>
            </div>    
        </article>`

    }
    clearInput();
}

function clearInput() {
    form.reset();
    deactivateSaveBtn();
}

function handleCard(event) {
    event.preventDefault();
    if (event.target.id === "delete-icon") {
        removeCardFromArray(event);
    } else if (event.target.id === "card-star") {
        updateStar(event);
    }
    renderCard();
}

function removeCardFromArray(event) {
    for (var i = 0; i < ideas.length; i++) {
        if (event.target.parentElement.parentElement.id === ideas[i].id.toString()) {
            ideas.splice(i, 1);
        }
    }
}

function updateStar(event) {
    event.preventDefault();
    for (var i = 0; i < ideas.length; i++) {
        if (event.target.parentElement.parentElement.id === ideas[i].id.toString()) {
            ideas[i].updateIdea();
        } 
            if (ideas[i].star === true) {
                event.target.
            }
    }
}

// function filterCards() {
//     var cardTitle = document.querySelector('h5');
//     var cardBody = document.getElementById('card-text');

//     if (cardTitle.innerText.toLowerCase().includes(searchBar.value.toLowerCase()) || cardBody.innerText.toLowerCase().includes(searchBar.value.toLowerCase())) {
//         cardTitle.parentElement.parentElement.classList.remove("hidden");
//     } else if (!searchBar.value) (
//         renderCard()
//     )
// }