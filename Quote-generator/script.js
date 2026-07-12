const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("newQuote");

const API_URL = "https://dummyjson.com/quotes/random";

async function getQuote() {

    quote.innerHTML = "Loading...";
    author.innerHTML = "";

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        quote.innerHTML = `"${data.quote}"`;

        author.innerHTML = `— ${data.author}`;

    } catch (error) {

        quote.innerHTML = "Something went wrong!";
        author.innerHTML = "";

    }

}

button.addEventListener("click", getQuote);

getQuote();