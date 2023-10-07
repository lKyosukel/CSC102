/*Dalton Verwolf*/
const txtInput = document.querySelector(".inputs input"),/*Takes inputs from the text box in the html*/
checkBtn = document.querySelector(".inputs button"),/*Enables button to be clicked when text is entered into the input box*/
infoTxt = document.querySelector(".info-txt");
let filterInput;
checkBtn.addEventListener("click", () => {/*Adds a listener for the specified event letting the program know to run once it occurs, in this case its a click*/
    let reverseInput = filterInput.split("").reverse().join("");/*Split creates an array, reverse reverses the array, and join puts it back together basically takes the input and flips it*/
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {/*If the return is not the same then the output below will display same for the follwing line of code for palindromes*/
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;/*Span creates space on either side of the value to give it a more aesthetic look*/
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
});
txtInput.addEventListener("keyup", () => {/*Filters out non-alphanumeric characters and spaces*/
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");/*Logs all entries into console in lowercase to avoid errors with capitalization*/
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  } 