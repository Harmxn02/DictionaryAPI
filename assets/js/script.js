// this is where the API will be fetched
"use strict";

document.addEventListener("DOMContentLoaded", init);

let BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';


function init() {
    document.querySelector("form").addEventListener("submit", processForm);
}

function processForm(e) {
    e.preventDefault();

    const query = document.querySelector("#query").value;
    const url = BASE_URL + `${query}`;
    
    
    // fetch(url)
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/penis')
        .then(res => res.json())
        // .then(data => console.log(data[0].meanings))
        .then(data => {
            const details = JSON.Search;
            showDetails(data)
        })

        // .catch(err => console.error(err));

        // console.log(data[0].meanings);
}


function showDetails(data) {
    let definition = data[0];
    let DEFINITION = data[0].meanings[0].definitions[0].definition;
    let PHONETICS = data[0].phonetic
    let SYNONYMS = data[0].meanings[0].synonyms;

    console.log(DEFINITION);
    console.log(PHONETICS);
    console.log(SYNONYMS);

    
    const $results = document.querySelector(".results");
    $results.innerHTML = " ";

    const HTML = `
                    <p id="phonetics">${PHONETICS}</p>
                    <p id="definition">${DEFINITION}</p>
                    <p id="synonyms">${SYNONYMS}</p>
                `;
    
    $results.insertAdjacentHTML("beforeend", HTML);
}