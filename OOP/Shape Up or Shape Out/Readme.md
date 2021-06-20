# Shape Up Or Shape Out
The purpose of this lab is to help solidify the OOP Class inheritance concepts you've learned from the lectures.

* You will be building a webpage that will enable users to draw shapes of varying sizes on the screen
* When a shape is clicked, you should update the sidepanel with the metrics for that shape
* Each type of shape will have its own input box(es) for getting size information, and an insert button for drawing the shape on the page

## Steps

* Create an index.html file, script.js file, and a css file for styling
* You can optionally use Bootstrap to also add style to your webpage

### HTML Objectives

1. Your shape painter should handle four shapes: Square, Rectangle, Circle, and Triangle
2. In your index.html, go ahead and add labeled input fields and insert buttons for each shape type:
* Rectangle: Inputs for width and height, and an insert button
* Square: Input for side length and an insert button
* Circle: Input for radius and an insert button
* Isoceles Right Triangle: Input for height and an insert button
3. Each of the insert buttons above should create a new instance of that particular shape, which should draw itself on the screen with the specified size and placed in a random location (object details are below)
4. Create a 600px by 600px div with the background color of your choosing. All the shapes you insert will be drawn within this div
5. Show a sidepanel beside this shape canvas. It should display the following information for a clicked shape:
* Shape Name:
* Width:
* Height:
* Radius:
* Area:
* Perimeter:

### JavaScript Objectives

1. You must use OOP. Specifically, you must use the classes defined below and properly use inheritance
2. Class- Shape
* Shape is very generic
* Try to put as much logic in this class as you can, but remember, sometimes you have to put logic in child classes for more custom behavior
3. Class- Circle
* Needs to take a single parameter, radius, in its constructor
* Needs to call the constructor of its logical parent class
* Can have methods that define behavior/calculations specific to Circles
4. Class- Triangle
* This will be a right isosceles Triangle
* Needs to take a single parameter, height, in its constructor
* Since it is a right isosceles Triangle, height/width/base will all be the same
* Needs to call the constructor of its logical parent class
* Can have methods that define behavior/calculations specific to Triangles
5. Class- Rectangle
* Needs to take two parameters, width and height, in its constructor
* Needs to call the constructor of its logical parent class
* Can have methods that define behavior/calculations specific to Rectangles
6. Class- Square
* Needs to take a single parameter, sideLength, in its constructor
* Needs to call the constructor of its logical parent class
* A square is a special type of rectangle
* Can have methods that define behavior/calculations specific to Squares
