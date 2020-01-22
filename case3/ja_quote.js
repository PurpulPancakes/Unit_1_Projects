"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 3

   Random Jane Austen Quote Generator
   Author: Marcus Tinney
   Date: 1/21/2020  
   
   This script randomly generates a Jane Austen quote from
   a list of 10 quotes and writes that quote into the first
   quotation tag in the Web page.

*/
//This calls for a random value from 1 to 10 with 0, being the lowest (Aka the first one) and 10 being the size
var randomQ = randomInt(0,10);

//This is the math that figures out how to get 1 through 10
function randomInt(louis, size){
   var randy = Math.floor(Math.random() * size + louis);
   return randy;
}

//This pulls out a random quote from the list
var quoteElem = document.getElementsByTagName("quote")[0];

//This simplay replaces "quote" with the actual quote silly goose!
quoteElem.innerHTML = getQuote(randomQ);


function getQuote(n) {
   var quotes = [
   "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
   "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
   "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
   "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
   "Life seems but a quick succession of busy nothings.",
   "Our scars make us know that our past was for real.",
   "I cannot speak well enough to be unintelligible.",
   "One cannot be always laughing at a man without now and then stumbling on something witty.",
   "Men were put into the world to teach women the law of compromise.",
   "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
   ];
   
   return quotes[n];
}