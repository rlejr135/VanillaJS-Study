const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotes = [
    {
        quote: "hi",
        author: "me"
    },
    {
        quote: "hi",
        author: "mee"
    },
];


let todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
