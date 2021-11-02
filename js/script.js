/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Opportunities don't happen. You create them.",
    source: "- Chris Grosser"

  },
  
  {
    quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    source: "- Jim Rohn",
    citation: "Bamou Quotes Design Publishing",
    year: "December 11, 2019"

  },

  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "- Walt Disney"

  },

  {
    quote: "All progress takes place outside the comfort zone.",
    source: "- Michael John Bobak"

  },

  {
    quote: "If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
    source: "- Dale Carnegie"

  }
];
/*
console.log(quotes)
*/

/***
 * `getRandomQuote` function
***/
function getRandomQuote (){
  const randomNumber =  Math.floor(Math.random() * quotes.length );
  for(let i = 0; i < quotes.length; i++){
    let shuffleQuote = quotes[randomNumber];
  }
  return shuffleQuote;
 
}





/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);