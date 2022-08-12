// Your code here
const dodger = document.getElementById('dodger');

dodger.style.backgroundColor = 'red';

//dodger.style.bottom = '30px';

function moveDodgerLeft() {
    const leftValue = dodger.style.left.replace("px", "");
    const left = parseInt(leftValue, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftValue = dodger.style.left.replace("px", "");
    const left = parseInt(leftValue, 10);

    if (left < 400) {
        dodger.style.left = `${left + 1}px`;
    }
}

dodger.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }

});