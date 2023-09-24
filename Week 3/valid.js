	//Dalton Verwolf

    var firstLast = document.forms['form']['firstLast'];/*Sets the variables for the name entry*/
    var zip = document.forms['form']['zip'];/*Sets the variable for the zip entry*/
    
    var firstLast_error = document.getElementById('firstlast_error');
    var zip_error = document.getElementById('zip_error');
    
    firstLast.addEventListener('textInput', firsztLast_Verify);
    zip.addEventListener('textInput', zip_Verify);
    
    function validated(){/*Displays error message if name entered exceeds 20 characters*/
        if (firstLast.value.length > 20) {
            firstLast.style.border = "1px solid red";
            firstLast_error.style.display = "block";
            firstLast.focus();
            return false;
        }
        if (zip.value.length < 5) {/*Displays error message if zip is less 5 characters*/
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
        if (zip.value.length = 5) {
            zip.style.border = "1px solid silver";
            zip_error.style.display = "none";
            return true;
        }
    }
    
    