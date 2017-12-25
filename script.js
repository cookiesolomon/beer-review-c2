//PROJECT EXERCISE 1
// Inside script.js, declare an addBeer function that has two parameters, "name" and "category". 
//Stop there with an empty function as we'll continue writing it in the next exercise.
// Now, separately, create a function to handle the '.post-beer' button getting clicked.
// Inside, the handler function you'll want to invoke addBeer. 
//As it's arguments you'll need to give it the beer's "name" and "category" from the inputs.


// PROJECT EXERCISE 2
// In your JavaScript, create a global array called beers.
// Inside the addBeer function, create a new beer object 
// using the data that is passed to the function (ie via the parameters) and push it to a beers array.
// PROJECT EXERCISE 3
// Declare another function called renderBeers that takes no arguments.
// Inside this function, firstly empty the beers <ul> so that it no longer has any <li> elements .
//  Then loop through the beers array, inside the loop append the beers to the beers <ul>
// Invoke renderBeers inside your click handler just below where you're invoking the addBeer function.
// Why are we updating the beers after adding the new beer?

var beers = [];


function addBeer(name, category) {
    var beer = { 'name': name, 'category': category, };
    beers.push(beer);
    if ($('.rating').val()) {
        beer.rating = $('.rating').val();
    }

}

$('.post-beer').click(function () {
    addBeer($('.beer-input').val(), $('.category-input').val());
    renderBeers();
    $('.beer-input').val("");
    $('.category-input').val("");
});


function renderBeers() {
    $('.beers').find('li').remove();
    for (i = 0; i < beers.length; i++) {
        $('.beers').append('<li>Beer Name: ' + beers[i].name + ' Beer Type: ' + beers[i].category + ' Rating: ' + beers[i].rating + '</li>');

    }
    beers.push()

}

// Add another button to your page that will sort the beers on the page by rating when clicked. 
// If it gets clicked again, reverse the order (if they were sorted in ascending order, sort in descending and vice-versa).

function sortByRating() {

    var newList = beers.sort(function (a, b) {
        return a.rating - b.rating;

    });

}

// function reverseSort(){
//     var newerList = beers.sort(function (a, b) {
//      return b.rating - a.rating;

//     });
// }

$('.sort-beer').click(function () {

    sortByRating();
    renderBeers();

});

