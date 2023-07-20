
const totalDrinks = document.querySelector("#drinksordered");
let numDrinks = Number(window.localStorage.getItem("drinks-ls"));
    if (numDrinks !== 0) {
        totalDrinks.textContent = numDrinks;
    } else {
        totalDrinks.textContent = `No drinks have been ordered`;
    }
