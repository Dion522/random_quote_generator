/*
Quotes list, and properties are stored in an array of objects assigned to the quotes variable.
 */
const quotes = [
  {
    quote: "Opportunities don't happen. You create them.",
    source: " Chris Grosser"

  },
  
  {
    quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    source: " Jim Rohn",
    citation: "Bamou Quotes Design Publishing",
    year: "December 11, 2019"

  },

  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: " Walt Disney"

  },

  {
    quote: "All progress takes place outside the comfort zone.",
    source: " Michael John Bobak"

  },

  {
    quote: "If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
    source: " Dale Carnegie"

  }
];
/* 
Function that generates a random quote, and returns a random quote object.
*/
function getRandomQuote (){
  const randomNumber =  Math.floor(Math.random() * quotes.length );
  return quotes[randomNumber];
}

/*
Function that takes the return value of the getRandomQuote function, and stores it in the randomQuote variable
 which then inserts the randomQuote property values in between <p> tags using string interpolation thats assigned to the printedQuote variable.
 The if condition checks if the property is true or false. If true concatenates the string vlaue with the printedQuote string and if false concatenates 
 with a closing <p> tag. The HTML is then updated with the printedQuote value.

 */
function printQuote (){
 const randomQuote = getRandomQuote();
 let printedQuote =`<p class="quotes">${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;

 if(randomQuote.citation){
  printedQuote += `<span class="citation">${randomQuote.citation}</span>`;
 }

if(randomQuote.year){
  printedQuote += `<span class="year">${randomQuote.year}</span>`;
}

printedQuote += '</p>';

document.getElementById('quote-box').innerHTML = printedQuote; 

}

printQuote();



/***
 * click event listener or the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);