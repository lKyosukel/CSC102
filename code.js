/*Dalton Verwolf*/

function rollDice()
 {
     alert("Good Luck!");//Confirmation that the button was pushed
     var die1 = Math.ceil(Math.random()*6);//Uses the math library to generate a random number up to 6 and rounds up
     var die2 = Math.ceil(Math.random()*6);
     var sum = die1+die2;
     document.getElementById("sumTag").innerHTML = "You got " +  sum;//Reserved section in the HTML for the sum of the 2 random numbers
     document.getElementById("result1").innerHTML = die1;//Reserved section in the HTML for the die1
     document.getElementById("result2").innerHTML = die2;//Reserved section in the HTML for the die2

   if (sum ==2||sum==3||sum==12) {
     alert("CRAPS - you lose!");
   } else if ((die1==die2)&&(die1%2==0)) {
     alert("You Won!")
   } else {
     alert("You pushed!")
   }
   /*Conditional statements for the output based on the sum variable
   a sum of 2,3, or 12 will output you lose. If die1 and die are equal and
   they are even then it will output you win.Any other number will give the
   you pushed alert*/
}

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
} 