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
    if (e !== undefined) {                                          //   Prevents form from being sent to server
        e.preventDefault();
    }
    let selectedRoast = roastSelection.value;                       //   Gets user input
    let filteredCoffees = [];                                       //   Creates output array


    if(selectedRoast === 'none'){                                   //   Clears coffee-container so video is ez seen
        coffeeContainer.innerHTML = '';
    } else if(selectedRoast === 'all roasts'){                      //   Shows all the coffee list
        coffeeContainer.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee){                      //   Filters according to user's selection
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee)
            }
            coffeeContainer.innerHTML = renderCoffees(filteredCoffees);
        });
    }
}
function nameSearch() {                                             //   Much of the same as updateCoffees fun
    let selectedName = nameSelection.value.toUpperCase();
    let filteredCoffees = [];

    coffees.forEach(function(coffee) {
       if (coffee.name.includes(selectedName) === true) {
           filteredCoffees.push(coffee)
    }
        coffeeContainer.innerHTML = renderCoffees(filteredCoffees);
    })
}
function createCoffee(e) {                                          //   Adds coffee obj to the array of obj
    if (e !== undefined) {
        e.preventDefault();
    }
    // don't submit the form, we just want to update the data
    let newCoffeeName = document.querySelector('#new-coffee-name').value;
    let newCoffeeRoast = document.querySelector('#new-coffee-roast').value;
    let newCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName,
        roast: newCoffeeRoast
    }
    coffees.push(newCoffee);
    updateCoffees();
}


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



// Create Vars from HTML elements and id
let coffeeContainer = document.querySelector('#coffees-container');
let roastSelection = document.querySelector('#roast-selection');
let nameSelection = document.querySelector("#CoffeeName");
let newCoffeeSubmit = document.querySelector('#new-coffee-button');


// Create add event listener
newCoffeeSubmit.addEventListener('click', createCoffee);
roastSelection.addEventListener('change', updateCoffees);
nameSelection.addEventListener("keyup", nameSearch);



// coffeeContainer.innerHTML = renderCoffees(coffees);                  //   <-- This removed so we don't start with
                                                                        // list