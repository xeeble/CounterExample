// A Counter that inceases, decreases and resets a value
const increment = 1;
const decrement = 1;
let count = 0;
const value = document.getElementById("value");
// select all the buttons insead of doing 1 by 1
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    // use e - event argument to access the event object and check which button was clicked on
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('Decrease')){
            count -= decrement;
        }
        if (styles.contains('Increase')){
            count += increment;
        }
        if (styles.contains('Reset')){
            count = 0;
        }
        if (count > 0){
            //change text color to green
            value.style.color = "green";
        }
        if (count < 0){
            //change text color to red
            value.style.color = "red";
        } 
        if (count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    })
});
