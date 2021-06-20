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
