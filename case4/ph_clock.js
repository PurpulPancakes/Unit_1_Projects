"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Marcus Tinney
   Date: 1/22/2020 

   Filename:   ph_clock.js     

*/

//This sets our timer with a value of 30 minutes
var minsLeft = 30;

//This has the base value of 0 seconds, so it doesn't add to the 30 minutes
var secsLeft = 0;

//This figures out how much time is left and displays it correctly
var timeLeft = minsLeft * 60 + secsLeft;

//This runs our clock interval every second, making usre it decreases every second
var clockID = setInterval("countdown()", 1000);

//This function runs the whole countdown
function countdown(){
   //This Figures out how many minutes and seconds are left based on existing data
   var minsLeft = Math.floor(timeLeft / 60);
   var secsLeft = timeLeft - 60 * minsLeft;
   //This makes sure to add a leading zero, so single digit numbers display as 05 instead of just 5
   var minsString = addLeadingZero(minsLeft);
   var secsString = addLeadingZero(secsLeft);
   //This Displays the Minutes and Seconds
   document.getElementById("minutes").innerHTML = minsString;
   document.getElementById("seconds").innerHTML = secsString;
   checkTimer();
   //This depletes the timer by 1 second, every second
   timeLeft --;
}

//This function stops the timer when the clock reaches zero
function stopClock(){
   document.getElementById("TimeHead").insertAdjacentHTML("beforeend","<br />(Order Expired)");
   clearInterval(clockID);
}




/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
