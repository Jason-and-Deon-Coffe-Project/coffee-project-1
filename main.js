"use strict"

// Creates string of each obj, with html tags
function renderCoffee(coffee) {                                         //   'coffee' will be an object from the array
    var html = '<div class="coffee">';                                 //   Creates var with the start of the div
                                                                        // container with the 'coffee' class
    html += '<div class="coffee-name">' + coffee.name + '</div>';                //   Adding to the string with the coffee name
                                                                        // attribute (with more div tags and h1
                                                                        // bootstrap class)
    html += '<div class="roast">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

// Runs through the array and calls the renderCoffee function per obj
function renderCoffees(coffees) {
    var html = '';                                                      //   Creates a string var
    for(var i = coffees.length - 1; i >= 0; i--) {                      //   Loop through Coffee array backwards
                                                                        // until 'i' reach to 0
        html += renderCoffee(coffees[i]);
    }
    return html;
}


// Filter Function
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;                           //   Var that holds user input
    var filteredCoffees = [];                                           //   New array var as our output

    if (selectedRoast === "all roasts"){
        coffeeContainer.innerHTML = renderCoffees(coffees)
    } else {
        coffees.forEach(function (coffee) {                             //   Loop through original array
            if (coffee.roast === selectedRoast) {                           //   Only selecting objects that user requests
                filteredCoffees.push(coffee);                               //   Pushes those objects into our new output
                // array
            }
        })
    };
    coffeeContainer.innerHTML = renderCoffees(filteredCoffees);                   //   Running renderCoffees function with new
}                                                                       // output array to get the string of HTML tags
                                                                        // with object info.  Then it is placed into
                                                                        // the 'coffeeContainer' element on the HTML page

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

// Setting Vars
var coffeeContainer = document.querySelector('#coffees-container');
var submitButton = document.querySelector('#submit');           //   Submit: activate the functions with user
                                                                         // info
var roastSelection = document.querySelector('#roast-selection');//   Getting user roast input



coffeeContainer.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


console.log(coffees.length);