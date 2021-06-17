# Dicey Business

## This lab will combine principles of HTML, CSS, JavaScript, Accessing/Creating/Modifying HTML elements, and Object Oriented Programming.

1. You must use OOP. Create a class named Die that represents a single die.
2. Your class must have a property named value. hint you will not have any arguments in your constructor.
3. Your class must have a method named roll that generates a random integer 1-6, sets the value property, and updates the div on the page with the new value.
4. When a new Die is created, it should automatically create a div, call its roll method, and put the div on the screen
5. You can use either the DOM or JQuery, but please be consistent and stick with one.

## Hints

* You can set a property on your Die object that holds the div representing the die on the page.
* You will probably want to store each Die you create in a global array. This may be helpful when it comes time to roll all the dice.
* Clicking the Roll Dice button can loop through that array, where you will have access to the properties and methods of each Die object.

## Above & Beyond

* Create a sumDice function and a button that triggers it. It should add up the current face value of all the dice on the page and display an alert with the sum.
* Add a feature where clicking on a die on the page causes just that one die to roll, updating its face value
* Add a feature where double clicking on a die on the page causes that die to be removed from the page
* Be careful to take appropriate measures so that the sumDice function still reports the correct sum after you delete a die.
* You need to not only remove the on-screen representation of the Die on the screen, but also remove the Die object from the array as well.
