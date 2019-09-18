'use strict';

var votesRemaining = 25;
var containerEl = document.getElementById('picture-container');
var resultsEl = document.getElementById('results');
var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var imageThreeEl = document.getElementById('picture3');
var allProducts = [];
var recentIndex = [];


function Product(name){
  this.alt = name;
  this.title = name;
  this.src = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;

  allProducts.push(this);
}

//function to generate the 1st image (index)

function imageGenerator(){

  while(recentIndex.length > 6){
  recentIndex.shift();
  }

  var index = random(allProducts.length);
  
  while(recentIndex.includes(index)){
    index = random(allProducts.length);
  }
  
  imageOneEl.src = allProducts[index].src;
  imageOneEl.alt = allProducts[index].alt;
  imageOneEl.title = allProducts[index].title;
  allProducts[index].views++;
  recentIndex.push(index);


//function to generate the 2nd image (indexTwo)
    var indexTwo = random(allProducts.length);

  // as long as indexTwo falls into the recentIndex array, keep getting a new indexTwo from remaining products array elements; 
  
  while(recentIndex.includes(indexTwo)){
    indexTwo = random(allProducts.length);
  }

  imageTwoEl.src = allProducts[indexTwo].src;
  imageTwoEl.alt = allProducts[indexTwo].alt;
  imageTwoEl.title = allProducts[indexTwo].title;
  allProducts[indexTwo].views++;
  recentIndex.push(indexTwo);


//function to generate the 3rd image (indexThree)

  var indexThree = random(allProducts.length);

 // as long as indexThree falls into the recentIndex array, keep getting a new indexThree from remaining products array elements;  

  while(recentIndex.includes(indexThree)){
    indexThree = random(allProducts.length);
  }

  imageThreeEl.src = allProducts[indexThree].src;
  imageThreeEl.alt = allProducts[indexThree].alt;
  imageThreeEl.title = allProducts[indexThree].title;

  allProducts[indexThree].views++;
  recentIndex.push(indexThree);
}

// using code from MDN docs on Math.random()
// max is the length of the array
function random(max){
  return Math.floor(Math.random() * Math.floor(max));
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('usb');
new Product('water-can');
new Product('wine-glass');


//function to sort out the most viewed product
function renderMostViewed(){
  var mostViewed;
  var clicks = 0;

  for(var i = 0; i < allProducts.length; i++){
    // loop over my allProducts array
    // find the product instance that has the same name as the product that was clicked on
    // increment the votes on that product
    if(allProducts[i].votes > clicks){
      clicks = allProducts[i].votes;
      mostViewed = allProducts[i];
    }
  }

  //Create h2 and append it to the DOM for displaying results 
  var h2El = document.createElement('h2');
  h2El.textContent = `The most popular product is  ${mostViewed.title} with ${mostViewed.votes} votes`;
  resultsEl.appendChild(h2El);

}

  function handleClick(event){
  var clickedProduct = event.target.title;
   for(var i = 0; i < allProducts.length; i++){
      if(clickedProduct === allProducts[i].title){
         allProducts[i].votes++;
      }
    }

    imageGenerator();
    votesRemaining--;

    if(votesRemaining === 0){
     containerEl.removeEventListener('click', handleClick);
     renderMostViewed();
    }
  }

containerEl.addEventListener('click', handleClick);
imageGenerator();