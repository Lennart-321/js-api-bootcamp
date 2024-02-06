// API Bootcamp
// In this exercise you will code some simple API requests to a API containg a couple of different data types. The focus here is just to get to know the fetch API built-in in JavaScript
const main = document.getElementById("main");

// Exercise 1:
// Request all the pokemons with fetch from the API.
// https://majazocom.github.io/Data/pokemons.json
async function exercise1() {
    const response = await fetch("https://majazocom.github.io/Data/pokemons.json");
    const json = await response.json();

    // Render the objects one and one in the console.
    json.forEach(m => console.log(m));

    // Render the name of the objects in the DOM instead of the console to make it visible for the user.
    json.forEach(m => {
        main.insertAdjacentHTML("beforeend", `<p>${m.name}</p>`);
    });
}
exercise1();

// Exercise 2:
// Request all the dogs with fetch from the API.
// https://majazocom.github.io/Data/dogs.json
async function exercise2() {
    const response = await fetch("https://majazocom.github.io/Data/dogs.json");
    const json = await response.json();

    // Render the names of the dogs one and one in the console.
    json.forEach(m => console.log(m.name));

    // Render them out in the DOM instead of the console.
    json.forEach(m => {
        main.insertAdjacentHTML("beforeend", `<p>${m.name}</p>`);
    });
}
exercise2();

// Exercise 3:
// Request all the books from the API.
// https://majazocom.github.io/Data/books.json
async function exercise3() {
    const response = await fetch("https://majazocom.github.io/Data/books.json");
    const json = await response.json();

    // Render all the books to the DOM that have less pages than 500.
    json.forEach(m => {
        if (m.pages < 500) main.insertAdjacentHTML("beforeend", `<p>${m.title}</p>`);
    });
}
exercise3();

// Exercise 4:
// Request all the visitors to a work-event from the API.
// https://majazocom.github.io/Data/attendees.json
async function exercise4() {
    const response = await fetch("https://majazocom.github.io/Data/attendees.json");
    const json = await response.json();

    // Render only the ones that are attending to the DOM.
    // attending: true
    json.forEach(m => {
        if (m.attending) main.insertAdjacentHTML("beforeend", `<p>${m.name}</p>`);
    });

    // Render only the ones that are attending and have some allergy to the DOM.
    json.forEach(m => {
        if (m.attending && m.allergies && m.allergies.length > 0)
            main.insertAdjacentHTML("beforeend", `<p>${m.name}</p>`);
    });
}
exercise4();
