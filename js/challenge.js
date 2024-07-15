let counter = document.getElementById("counter"); // assign h1(counter) to variable
let count = 0; // variable to be used to increment counter
const interval = setInterval(counterIncrement, 1000); // setInterval(callback and delay) assigned to a variable

// a function that increments the counter as per delay set by setInterval
function counterIncrement() {
    count++; // increases count by 1
    counter.innerHTML = count; // updates the counter with the value of count
    return;
}

