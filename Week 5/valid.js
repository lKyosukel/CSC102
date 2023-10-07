	//Dalton Verwolf

    var firstLast = document.forms['form']['firstLast'];/*Sets the variables for the name entry*/
    var zip = document.forms['form']['zip'];/*Sets the variable for the zip entry*/
    
    var firstLast_error = document.getElementById('firstLast_error');//attaches an event handler to the specified element without interfering with other handlers, in this case a text entry
    var zip_error = document.getElementById('zip_error');// same for this line, its waiting to see a text entry in the field.
    //These are similar to the "onclick" modifiers for buttons.
    
    firstLast.addEventListener('textInput', firstLast_Verify);
    zip.addEventListener('textInput', zip_Verify);
    
    function validated(){/*Displays error message if name entered is less than 5 characters*/
        if (firstLast.value.length < 5) {
            firstLast.style.border = "1px solid red";
            firstLast_error.style.display = "block";
            firstLast.focus();
            return false;
        }
    
        if (firstLast.value.length > 20) {/*Displays error message if name entered exceeds 20 characters*/
            firstLast.style.border = "1px solid red";
            firstLast_error.style.display = "block";
            firstLast.focus();
            return false;
        }
    
        if (zip.value.length < 5) {/*Displays error message if zip is less 5 characters or more than 6 but for some reason I cant get the second half of the condition to stick*/
            zip.style.border = "1px solid red";
            zip_error.style.display = "block";
            zip.focus();
            return false;
        }
    
    }
    function firstLast_Verify(){/*Validates and allows login if value is over 8 characters*/
        if (firstLast.value.length >= 8) {
            firstLast.style.border = "1px solid silver";
            firstLast_error.style.display = "none";
            return true;
        }
    }
    function zip_Verify(){/*Validates and allows login if value is 5 characters*/
        if (zip.value.length >= 5) {
            zip.style.border = "1px solid silver";
            zip_error.style.display = "none";
            return true;
        }
    }
    //I appreciate your patience with me Professor, I realize there are easier ways to do this
    //but I wanted to challenge myself and also add the error messages as part of my creative elements

    function openNav() {
        document.getElementById("mySidepanel").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
      } 