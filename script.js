var beers = [];
var descending = true;

function addBeer(name, category) {
    var beer = { 'name': name, 'category': category, };
    beers.push(beer);
    if ($('.rating').val()) {
        beer.rating = $('.rating').val();
    }
}

function beerPost() {
    addBeer($('.beer-input').val(), $('.category-input').val());
    renderBeers();
    $('.beer-input').val("");
    $('.category-input').val("");

}
function renderBeers() {
    $('.beers').find('li').remove();
    for (i = 0; i < beers.length; i++) {
        $('.beers').append('<li><span class="bName">Beer Name: </span>' + beers[i].name + '<span class="cName">Beer Type:</span> ' + beers[i].category + ' <span class="rName">Rating:</span> ' + beers[i].rating + '</li>');

    }
}

function sortByRating() {
    var newList = beers.sort(function (a, b) {
        return a.rating - b.rating;
    });
}

function sortButton() {
    sortByRating();
    if (descending) {
        reverseOrder();
        descending = false;

    } else {
        renderBeers();
        descending = true;
    }

}
function reverseOrder() {
    $('.beers').find('li').remove();
    for (i = beers.length - 1; i >= 0; i--) {
        $('.beers').append('<li><span class="bName">Beer Name:</span>' + beers[i].name + ' <span class="cName">Beer Type:</span> ' + beers[i].category + ' <span class="rName">Rating:</span> ' + beers[i].rating + '</li>');
    }
}

// $('.post-beer').click(function () {
//     addBeer($('.beer-input').val(), $('.category-input').val());

//     renderBeers();

//     $('.beer-input').val("");
//     $('.category-input').val("");
// });

// $('.sort-beer').click(function () {

//     sortByRating();
//     if (descending) {
//         reverseOrder();
//         descending = false;

//     } else {
//         renderBeers();
//         descending = true;
//     }
// });