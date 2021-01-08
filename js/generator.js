function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper );
}

let html = ``;

let quotePick = (getRandomNumber(quotes.length));

//could probably turn this variable assignment into a loop/function, using key()?
let quoteWords = quotes[quotePick].verbage;
let quoteAuth = quotes[quotePick].author;
let quoteSrc = quotes[quotePick].source;

document.querySelector('main').innerHTML = `<div class = "quote">
${quoteWords}
</div>
<div class = "source">
${quoteSrc}
</div>
<div class = "author">
by ${quoteAuth}
</div>`

