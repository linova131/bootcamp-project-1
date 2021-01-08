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
const bgcolors = ['#5F0F40', '#9A031E','#FB8B24','#E36414','#0F4C5C'];
let usedQuotes = [];

function getRandomQuote() {
  let quoteNum = Math.floor(Math.random()*quotes.length);
  return quotes[quoteNum];
 }
 
 function getColor() {
  let colorNum = Math.floor(Math.random() *bgcolors.length );
  let color = bgcolors[colorNum];
  return color; 
 }


function printQuote() {
  //let quoteID;
  let quotePick = getRandomQuote();
  let quoteID = quotePick.id;
/*
  for (;usedQuotes.includes(quoteID);) {
    letquotePick = getRandomQuote();
    let quoteID = quotePick.id;
  };


  */
  //if (usedQuotes.includes(quoteID)) {
   // console.log(usedQuotes.includes(quoteID));
  //};
  usedQuotes.push(quoteID);
  


  if (usedQuotes.length === quotes.length){
    usedQuotes = [];
  };
  console.log(usedQuotes.length);
  let quoteWords = quotePick.verbage;
  let quoteAuth = quotePick.source;
  let quoteBook = quotePick.citation;
  let quoteYear = quotePick.year;
  let quoteHTML = `
  <p class="quote">${quoteWords}</p>
  <p class="source">${quoteAuth}<span class="citation">${quoteBook}</span><span class="year">${quoteYear}</span></p>`;
  document.querySelector('#quote-box').innerHTML = quoteHTML;
  document.body.style.background = getColor();
  return quoteHTML;
 }


document.querySelector('#quote-box').innerHTML = printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
