
/*Dalton Verwolf*/

function funcAlert()
{
    /*Pop up message button*/ 
    alert ("LETS PLAY A GAME");
/*Variables call on the library(math) and the floor says whether it will round up(ceiling) or down(floor). You then call the math library again and tell it to pick a random number using numbers between 6 and 1*/
    var die1 = Math.ceil(Math.random() * 6) +1;
    var die2 = Math.ceil(Math.random() * 6) +1;
    var sum = die1+die2;
    document.getElementById("sumTag").innerHTML = "sum = " +  sum;

    document.getElementById("die1").innerHTML = "die1 = " + randNum1;
    document.getElementById("die2").innerHTML = "die2 = " + randNum2;

    //alert("First num = " + die1 + "  Second num " + die2);

   if (sum ==7)(sum==15) 
   {
     alert ("CRAPS - you lose!");
   }
   else if (die1==die2)(die1 % 2 = 0)
   {
    alert (You won!);
   }
   else
   {
    alert("You pushed!");
   }
  }
