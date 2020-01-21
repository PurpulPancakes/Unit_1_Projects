/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Marcus Tinney
   Date: 1/16/2020    

*/

// This displays the current time and date
var thisTime = new Date(/*2018, 1, 3, 3, 15, 28, 0*/);

//This displays the date from "thisTime" into a text string with digits
var timeStr = thisTime.toLocaleString();

//This adds our text string of our date into the element with the id of "timeStamp"
document.getElementById("timeStamp").innerHTML = timeStr;

//This finds the exact hour it is in our Date variable
var thisHour = thisTime.getHours();

//This finds the exact month it is in our Date variable
var thisMonth = thisTime.getMonth();

//This is our math equation that finds out what number to use to find our exact star coorelation?? I don't know how astronomy works. But it's math! and Cool!
var mapNum = (2 * thisMonth + thisHour) % 24;

//This is simply a html string that finds what image to use based on the number
var imgStr = "<img src= 'sd_sky" + mapNum + ".png'/>";

//This just uses the image called for
document.getElementById("planisphere").insertAdjacentHTML("afterbegin",imgStr);