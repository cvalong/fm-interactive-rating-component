let formButton = document.getElementById('form-submit');
let ratingState = document.getElementById('rating-state');
let thankYouState = document.getElementById('thank-you-state');
let rating = document.getElementById('rating-choice');
let ratingForm = document.getElementById('rating-form');

//pulls selection from the rating form
function checkForm(){
    let selection = '';
    const len = ratingForm.rating.length;

    for (i = 0; i < len; i++) {
        if (ratingForm.rating[i].checked) {
            selection = ratingForm.rating[i].value;
        }
    }

    return selection;
}

function setRatingText(){
    rating.textContent = ratingForm.elements['rating'].value;
}

function changeState(){
    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
}

function handleForm(event) {
    event.preventDefault();
    if (checkForm() == '') {
        alert('Please Rate Us!');
        return false;
    } else {
        console.log(checkForm());
        setRatingText();
        changeState();
    }
    
}

ratingForm.addEventListener('submit', handleForm);
