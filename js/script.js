/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/***
 * `getRandomQuote` function
***/

/***
 * `printQuote` function
***/

//bgcolors is an array of colors that should be harmonious and also allow the white text to show clearly
const bgcolors = ['#5F0F40', '#9A031E','#FB8B24','#E36414','#0F4C5C','#000000','#02111B','#606C38','#283618','#87E8B','#9BC53D'];
let usedQuotes = [];

//getRandomQuote() will choose a random quote from the array on quotes.js
function getRandomQuote() {
  let quoteNum = Math.floor(Math.random()*quotes.length);
  return quotes[quoteNum];
 }
 
 //getColor() chooses a random color from the array bgcolors everytime a new quote is displayed
 function getColor() {
  let colorNum = Math.floor(Math.random() *bgcolors.length );
  let color = bgcolors[colorNum];
  return color; 
 }

 //checkQuote() takes the return from getRandomQuote() to determine if the quote has been used before
function checkQuote(pick) {
  let quoteID = pick.id;
  let alreadyUsed;
  if (usedQuotes.includes(quoteID)) {
    alreadyUsed = true;
  } else {
    alreadyUsed = false;
  };
  return alreadyUsed;
};

//printQuote() takes a random quote and prints it to the screen. They should not repeat until after each quote has displayed at least once.
function printQuote() {
  let quotePick;

  do {
    quotePick = getRandomQuote();
  } while (checkQuote(quotePick) === true)

  usedQuotes.push(quotePick.id);
  
  let quoteWords = quotePick.verbage;
  let quoteAuth = quotePick.source;
  let quoteBook = quotePick.citation;
  let quoteYear = quotePick.year;
  let quoteHTML = `
  <p class="quote">${quoteWords}</p>
  <p class="source">${quoteAuth}<span class="citation">${quoteBook}</span><span class="year">${quoteYear}</span></p>`;
  document.querySelector('#quote-box').innerHTML = quoteHTML;
  document.body.style.background = getColor();
  
  if (usedQuotes.length === quotes.length){
    usedQuotes = [];
  };

  return quoteHTML;

};
  
//Screen loads with a quote already in place
document.querySelector('#quote-box').innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
