'use strict';

var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var imageThreeEl = document.getElementById('picture3');

var containerEl = document.getElementById('picture-container');

// imageOneEl.src = 'img/boxCat.jpg';
// imageOneEl.title = 'boxCat';
// imageOneEl.alt = 'boxCat';

// imageTwoEl.src = 'img/yogaCat.jpg';
// imageTwoEl.title = 'yogaCat';
// imageTwoEl.alt = 'yogaCat';

// render two random images to the DOM from an array of images
var allProducts = [];

function Product(name){
  this.alt = name;
  this.title = name;
  this.src = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;

  allProducts.push(this);
}

function imageGenerator(){

  var index = random(allProducts.length);
  
  imageOneEl.src = allProducts[index].src;
  imageOneEl.alt = allProducts[index].alt;
  imageOneEl.title = allProducts[index].title;

  allProducts[index].views++;

  var indexTwo = random(allProducts.length);

  // as long as indexTwo is the same as index, keep getting a new indexTwo
  while(indexTwo === index){
    indexTwo = random(allProducts.length);
  }

  imageTwoEl.src = allProducts[indexTwo].src;
  imageTwoEl.alt = allProducts[indexTwo].alt;
  imageTwoEl.title = allProducts[indexTwo].title;

  allProducts[indexTwo].views++;


  var indexThree = random(allProducts.length);

  // as long as indexThree is the same as indexTwo or index, keep getting a new indexThree
  while(indexThree === indexTwo === index){
    indexThree = random(allProducts.length);
  }

  imageThreeEl.src = allProducts[indexThree].src;
  imageThreeEl.alt = allProducts[indexThree].alt;
  imageThreeEl.title = allProducts[indexThree].title;

  allProducts[indexThree].views++;
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
new Product('pet-sweet');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('usb');
new Product('water-can');
new Product('wine-glass');

function handleClick(event){
  var clickedCat = event.target.title;

  for(var i = 0; i < allProducts.length; i++){
    // loop over my allProducts array
    // find the product instance that has the same name as the product that was clicked on
    // increment the votes on that product
    if(clickedProduct === allProducts[i].title){
      allProducts[i].votes++;
    }
  }

  imageGenerator();
}

containerEl.addEventListener('click', handleClick);

imageGenerator();

// keep track of how many times an image was clicked on