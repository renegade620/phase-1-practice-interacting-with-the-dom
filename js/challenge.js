let counter = document.getElementById("counter"); // assign h1(counter) to variable
let count = 0; // variable to be used to increment counter
let interval = setInterval(counterIncrement, 1000); // setInterval(callback and delay) assigned to a variable
let minusButton = document.getElementById("minus"); // minus button
let plusButton = document.getElementById("plus"); // plus button
let heartButton =  document.getElementById("heart"); // assign heart button to variable
let pauseButton = document.getElementById("pause"); // assign pause button to variable
let likesList = document.querySelector(".likes"); // assign class of unordered list to a variable
let likes = {}; // initialize likes as an empty object that'll be used to counter heart button clicks
let isPaused = false; // initialize bool as false i.e Resume state
let commentForm = document.getElementById("comment-form");
let commentInput = document.getElementById("comment-input");
let commentsList = document.getElementById("list");

// a function that increases the counter if in resume state
function counterIncrement() {
    if (!isPaused) {
        count++;
        updateCounter(); // call of function that updates the counter based on count
    }
}

// a function that decreases the counter if in resume state
function counterDecrement() {
    count--;
    updateCounter();
}

// a function that updates counter based on value of count
function updateCounter() {
    counter.textContent = count; // pushes the count value to the counter
}

// a function that increases count of likes upon click of heart button
function likeCount() {
    if (!likes[count]) {
        likes[count] = 0;
    }
    likes[count]++; // increments like count by 1
    updateLikeCount(); // calls function that updates user on how many times a specific count has been liked
}

// a function that updates user on how many times a specific count has been liked
function updateLikeCount() {
    let existingCount = document.querySelector(`li[data-number="${count}"]`);
    let likeCount = likes[count];
    
    if (likeCount > 0) {
        if (existingCount) {
            existingCount.textContent = `${count} has been liked ${likeCount} time(s)`;
        } else {
            let li = document.createElement('li');
            li.textContent = `${count} has been liked ${likeCount} time(s)`;
            li.setAttribute('data-number', count);
            likesList.appendChild(li);
        }
    }
}

// a function that toggles on and off the pause button
function togglePause() {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? 'resume' : 'pause';
    
    // disables the buttons when pause is on
    minusButton.disabled = isPaused;
    plusButton.disabled = isPaused;
    heartButton.disabled = isPaused;
    
    if (isPaused) {
        clearInterval(interval);
    } else {
        interval = setInterval(counterIncrement, 1000);
    }
}

function handleComment(event) {
    event.preventDefault();
    let commentText = commentInput.value.trim();
    if (commentText) {
        addComment(commentText);
        commentInput.value = '';
    }
}

function addComment(text) {
    let commentElement = document.createElement('p');
    commentElement.textContent = text;
    commentsList.appendChild(commentElement);
}



// add event listeners for the minus and plus buttons
minusButton.addEventListener("click", counterDecrement); // for minus
plusButton.addEventListener("click", counterIncrement); // for plus
heartButton.addEventListener("click", likeCount);
pauseButton.addEventListener("click", togglePause);
commentForm.addEventListener("submit", handleComment);