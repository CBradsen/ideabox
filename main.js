var ideas = []
var newIdea;

var saveBtn = document.querySelector('.save-button');
var title = document.getElementById('title-input');
var body = document.getElementById('body-input');
var form = document.querySelector('.form-style');

form.addEventListener('input', hoverSaveBtn);

saveBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (title.value && body.value) {
        saveIdea();
    } else {
        
    }
});

function saveIdea() {
    var newIdea = new Idea(title.value, body.value);
    ideas.push(newIdea);
}

function hoverSaveBtn() {
    if (title.value && body.value) {
        saveBtn.classList.add("hover");
    } else {
        saveBtn.classList.remove("hover");
    }
}

//event listener of click on save button
//event handler to save idea 
    // make an new instance of Idea class 
    // push idea to ideas array 
    // render that card on the DOM (renderToDOM function)
    // clear input fields (clearInputFields function)
// save button should only work when body and title have input 
// if undefined, save button is a lighter color and cursor does not turn into pointer 
    // save button is darker color and cursor turns to pointer if body/title have input 
// event prevent default  