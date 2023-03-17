let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1. Write a JavaScript statement that selects the #main-titleID element.
  //Remember there are a couple of ways to query id.
  //Change the text of the title to something shorter.
  const mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "Fast & Furious: DOM Edition";

  // Part 2. Select the body and change the background-color to a new color of your choice.
  const body = document.querySelector("body");
  body.style.backgroundColor = "#FA6A09"; //Dom's car

  // Part 3. Select DOM's Favorite Things list and remove the last list item (Staring ppl down)
  const favoritesList = document.querySelector("#favorite-things");
  const lastItem = favoritesList.lastElementChild; //method returns last child el of favoritesList
  favoritesList.removeChild(lastItem); //method removes a child node fm the dom

  // Part 4. Select all .special-title class elements and change their font-siz to 2rem. Remember you might have to iterate through the list of elements
  const specialTitles = document.querySelectorAll(".special-title");
  for (let eachTitle of specialTitles) {
    eachTitle.style.fontSize = "2rem";
  }

  // Part 5. Access the Past Races list and remove Chicago (which is somewhere in the list)
  const pastRacesList = document.querySelector("#past-races");
  const listItems = pastRacesList.childNodes; //this property returns a Nodelist obj of elements's child nodes, which you can iterate through
  for (let item of listItems) {
    if (item.textContent === "Chicago") {
      pastRacesList.removeChild(item);
    }
    break;
    // return pastRacesList; //nope, when used this, it return original list
  }
  // Part 6. Add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
  //variable pastRaceList already exists for it
  const newListItem = document.createElement("li");
  newListItem.textContent = "Austria";
  pastRacesList.appendChild(newListItem);
  // console.log(pastRacesList); //checking

  // Part 7. Create a new .blog-post corresponding to the new city added in Part 6 (Austria). You will have to create a new <div> w/ class of .blog-post, a new <h2> w/ text, & a new <p> w/ some text. Think about what *order* you want to *create* the elements, and what -order- you want to -append- them in.
  //cache main in variable , which will be parent
  //create newblog div and cache, which will be child of main
  // set class attribute with value blog-post purple
  //  <h2> w/ text, & a new <p> w/ text
  const main = document.querySelector(".main");
  const newBlogPost = document.createElement("div");
  newBlogPost.className = "blog-post purple";
  newBlogPost.innerHTML = `<h1> ${newListItem.textContent}</h1> <p>I jumped my car over a broken bridge with my family!</p>`; //recall textContenet property sets-or-retrieves content, also used h1 instead of h2 because it didn't match rest blogpost headers
  main.appendChild(newBlogPost);
  // console.log(newBlogPost); //checking

  // Part 8. Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.
  const quoteTitle = document.querySelector("#quote-title");
  quoteTitle.addEventListener("click", randomQuote);

  // Part 9. Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.
  // The mouseout handler should toggle the class .purple
  // The mouseenter handler should toggle the class .red

  const allBlogPosts = document.querySelectorAll(".blog-post"); //recall to define multiple classes, the class names are separated w/ a space, hence class="blog-post purple" are two class names
  for (let blogs of allBlogPosts) {
    blogs.addEventListener("mouseout", function e() {
      blogs.classList.toggle("purple"); //this classList property 'toggle' where if class is there it's gonna remove it, and if it's not there it's gonna add it
    });
    blogs.addEventListener("mouseenter", function e() {
      blogs.classList.toggle("red");
    });
  }
});
