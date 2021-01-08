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

function getRandomQuote() {
  let quoteNum = Math.floor(Math.random()*quotes.length);
  return quotes[quoteNum];
 }

 function printQuote() {
  let quotePick = getRandomQuote();
  let quoteWords = quotePick.verbage;
  let quoteAuth = quotePick.source;
  let quoteBook = quotePick.citation;
  let quoteYear = quotePick.year;
  let quoteHTML = `
  <p class="quote">${quoteWords}</p>
  <p class="source">${quoteAuth}<span class="citation">${quoteBook}</span><span class="year">${quoteYear}</span></p>`;
  document.querySelector('#quote-box').innerHTML = quoteHTML;
  return quoteHTML;
 }



document.querySelector('#quote-box').innerHTML = printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
