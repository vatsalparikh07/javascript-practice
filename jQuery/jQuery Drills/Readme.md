# Simple jQuery Drills
## Objective
Practice using the fundamentals of jQuery.

## Setup
1. Create a new project folder and connect it to a GitHub repository. Initialize your project with a README.md that has a brief description of the purpose of this assignment, along with the title "jQuery Drills".
2. Create an index.html file and an app.js file and link the two together.
3. Create a script tag in the index.html and link to the jQuery CDN.

## Tasks
1. In app.js, make sure all the HTML has loaded before using jQuery. 
2. Create an <input> with a type="submit", id="btnSubmit", and value="Submit" in the index.html. Open the index.html in a browser and verify that a button appears.
3. In app.js and use jQuery to select the <input> element you just created by the id.
4. Add a click event handler to the <input> button that will alert a message in the browser when the button is clicked. 
5. In the index.html, create a <form> element with an <input type="text"> field and the <input type="submit"> you already created.
6. In app.js when the form is submitted, alert the value of the text input field.
7. If the user has typed in the input field then the button should be enabled, otherwise the button should be disabled. 
8. Create a div element and append it to the body.
9. When the user types in the input field and clicks submit, append the text in an h2 element to the div
10. When the user mouses over the h2 element, assign it a new background color and border radius. 
11. Great job! Now, comment out the code for creating the h2 and we are going to work on creating a list instead
12. Use jQuery to create an unordered list and append it to the body
13. When the user submits the form, append the text as list item to the unordered list
14. When the user clicks on the li element, assign it a random color.
15. When the user double clicks on the list, remove the item that was clicked on. 

## Hints
1. jQuery on method: http://api.jquery.com/on/
2. jQuery click method: https://api.jquery.com/click/
3. Math.random() can be used to generate a random number
4. RGB colors range from rgb(0, 0, 0) for black to rgb(255, 255, 255) for white
5. You will want to generate 3 random numbers between 0 and 255 and set the RGB values using jQuery
