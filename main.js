"use strict"

// Creates string of each obj, with html tags
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<div class="coffee-name">' + coffee.name + '</div>';
    html += '<div class="roast">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

// Runs through the array and calls the renderCoffee function per obj
function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


// Filter Function
function updateCoffees(e) {
    if (e !== undefined) {
        e.preventDefault();
    }
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];


    if(selectedRoast === ' '){
        coffeeContainer.innerHTML = ' ';
    } else if(selectedRoast === 'all roasts'){
        coffeeContainer.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee){
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee)
            }
            coffeeContainer.innerHTML = renderCoffees(filteredCoffees);
        });
    }
}
function nameSearch() {
    let selectedName = nameSelection.value.toUpperCase();
    let filteredCoffees = [];

    coffees.forEach(function(coffee) {
       if (coffee.name.includes(selectedName) === true) {
           filteredCoffees.push(coffee)
    }
        coffeeContainer.innerHTML = renderCoffees(filteredCoffees);
    })
}
function createCoffee(e) {
    e.preventDefault();
    // don't submit the form, we just want to update the data
    var newCoffeeName = document.querySelector('#new-coffee-name').value;
    var newCoffeeRoast = document.querySelector('#new-coffee-roast').value;
    var newCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName,
        roast: newCoffeeRoast
    }
    coffees.push(newCoffee);
    updateCoffees();
}
// function createItem() {
//     localStorage.setItem(roast, name);
// }
// createItem()


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


let coffeeContainer = document.querySelector('#coffees-container');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let nameSelection = document.querySelector("#CoffeeName");
let newCoffeeSubmit = document.querySelector('#new-coffee-button');
newCoffeeSubmit.addEventListener('click', createCoffee);
coffeeContainer.innerHTML = renderCoffees(coffees);


roastSelection.addEventListener('change', updateCoffees);

roastSelection.addEventListener('change', updateCoffees);
nameSelection.addEventListener("keyup", nameSearch);

console.log(coffees.length);