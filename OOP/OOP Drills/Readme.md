# Object Oriented Programming Drills

## Objectives
* Write object literals and get values of that objects properties
* Practice instantiation of objects using JS
* Practice pseudo classes
* Create methods
* Practice class inheritance

## Object Literals, Pseudo Classes and methods

1. Write 5 object literals, have them named person1-person5. Give each a name property and have this be a name of a friend or family member. Then give each one a second property, sayHello, which is a function that will console log the string “Hello! My name is ________”.
2. Call the sayHello function on each object and check the console for a response. This seems kind of repetitive doesn't it? Yeah, let’s practice some pseudo classes. Create a constructor function that will take a name, city, and age. (Remember, pseudo classes look like functions but are named with starting with a capital letter ex: function Example() null).
3. Write a method that will print a string similar to this “Hey! My name is ___ I am __ years old and live in __”.
4. Create 5 instances of the same friends from step 1, except this time use the pseudo class and method we just created.
5. Using the ES6 syntax makes object oriented programming in javascript much easier to understand. Let’s use the ES6 syntax and create the same class that we just did. (Hint: ES6 classes are not made using a constructor function, they use a keyword: class. They have a constructor which is used to take in the parameters name, city, and age. And methods will not need to be prototypes!).

## Inheritance

1. Create a class called vehicle, not every vehicle is a truck, nor is it a sedan, motorcycle, or coupe.
* So let’s define a vehicle in a way that we can use inheritance to determine if it is a truck, sedan, or motorcycle.
* All vehicles have wheels, some have 2 some have 4. Not all have doors, and not all have reverse.
* So to keep it simple lets have this vehicle class construct an object that only has the properties manufacturer and number of wheels.
2. Include a method called `aboutVehicle`, have it console log a string which will say what type of vehicle it is, who made it, and how many wheels it has. You can hardcode the type or specify it as an additional property on each class.
3. Trucks are vehicles, they have wheels. So let’s create a vehicle class that inherits the property of wheels from vehicle, but trucks have doors (unlike motorcycles) and they have a truck bed. So let’s add a number of doors property to this object as well as a boolean they it is true, it has a truck bed.
4. Now sedans are vehicles also, but they don’t have a truck bed (We’re ignoring the fact El Caminos broke this rule), they do have doors as well as 4 wheels. So to practice inheritance, lets just say sedans are vehicles, they aren’t trucks because they don’t have a truck bed but they get good gas mileage. Create a class sedan which extends vehicle, give it an additional property of size which could be small or medium, and give it a property of mpg.
5. Motorcycles are also vehicles, but they don’t have doors, or 4 wheels, or go in reverse (technically). So create a class motorcycle that extends vehicle, have it include a property to determine that it has handlebars and not a steering wheel, as well as another property to show it has no doors.
6. Each child class inherited the method which was created in vehicle, but each child class now has other specific features which define it. Override the `aboutVehicle` method in each child class to console log a string that represents these features, but still have it log the type, manufacturer and how many wheels it has!
