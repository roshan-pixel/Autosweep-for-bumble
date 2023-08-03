let numba = 1;
const interval = setInterval(() => {
    const likeButton = document.querySelector('[aria-label="Like"]');
    likeButton.click();
    console.log(numba);
    numba++;
}, 100);

// Clear the interval when the user clicks the button
const clearButton = document.querySelector('[aria-label="Clear"]');
clearButton.addEventListener('click', () => {
    clearInterval(interval);
});
