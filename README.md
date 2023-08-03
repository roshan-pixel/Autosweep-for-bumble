# Autosweep-for-bumble
Auto sweep for bumble
This is a simple JavaScript program that counts the number of times the user clicks the "Like" button. The program also includes a button that the user can click to clear the counter.

How to use
Open the index.html file in a web browser.
Click the "Like" button. The counter will increase by 1.
Click the "Clear" button to clear the counter.
Technical details
The program uses the setInterval() method to schedule the doshit() function to be called repeatedly, with an interval of 100 milliseconds. The doshit() function clicks the "Like" button and then increments the counter. The clearButton button has an event listener that calls the clearInterval() method when the user clicks the button.
