/* Global Variables */ 
let shapebox = document.getElementById('c1');

let shapeName = document.getElementById('name');
let height = document.getElementById('height');
let width = document.getElementById('width');
let area = document.getElementById('area');
let perimeter = document.getElementById('perimeter');
let radius = document.getElementById('radius');

/* Parent Class - Shape */
class Shape{
    constructor(x,y){
        this.div = document.createElement('div');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        shapebox.appendChild(this.div);
    }
}

/* Child Class - Rectangle inherited from Shape */
class Rectangle extends Shape{

    constructor(x,y,recheight,recwidth){
        super(x,y);
        this.div.classList.add('rectangle');
        this.div.style.width = `${recwidth}px`;
        this.div.style.height = `${recheight}px`;

        /* Describe Shape Method */
        this.div.addEventListener('click', () =>{
            shapeName.value = this.div.classList;
            width.value = recwidth;
            height.value = recheight;
            radius.value = "None";
            area.value = recheight*recwidth;
            perimeter.value = 2*(recwidth) + 2*(recheight);
        })

        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        })

        if(recheight == recwidth){
            alert('This is a square!');
            this.div.remove();
        }
    }
}

/* Child Class - Square inherited from Shape */
class Square extends Shape{
   
    constructor(x,y,size){
        super(x,y);
        this.div.classList.add('square');
        this.div.style.width = `${size}px`;
        this.div.style.height = `${size}px`;

        /* Describe Shape Method */        
        this.div.addEventListener('click', () =>{
            shapeName.value = this.div.classList;
            width.value = size;
            height.value = size;
            radius.value = "None";
            area.value = size**2;
            perimeter.value = size*4;
        })

        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        })
    }

}

/* Child Class - Circle inherited from Shape */
class Circle extends Shape{
   
    constructor(x,y,radius){
        super(x,y);
        this.div.classList.add('circle');
        this.div.style.width = `${radius*2}px`;
        this.div.style.height = `${radius*2}px`;

        /* Describe Shape Method */
        this.div.addEventListener('click', () =>{
            shapeName.value = this.div.classList;
            width.value = radius*2;
            height.value = radius*2;
            radius.value = radius;
            area.value = (Math.PI)*((radius)**2);
            perimeter.value = (2)*(radius)*(Math.PI);
        })

        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        })
    }

}

/* Child Class - Triangle inherited from Shape */
class Triangle extends Shape{
   
    constructor(x,y,size){
        super(x,y);
        this.div.classList.add('triangle');
        this.div.style.borderBottom = `${size}px solid yellow`;
        this.div.style.borderRight = `${size}px solid transparent`;

        /* Describe Shape Method */        
        this.div.addEventListener('click', () =>{
            shapeName.value = this.div.classList;
            width.value = size;
            height.value = size;
            radius.value = "None";
            area.value = (size*size)/2;
            perimeter.value = (2*size) + (Math.sqrt(2)*size);
        })

        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        })
    }

}

/* Button event listeners */
let sqbutton = document.getElementById('square');
sqbutton.addEventListener('click', insertSquare);

let recbutton = document.getElementById('rectangle');
recbutton.addEventListener('click', insertRectangle);

let cirbutton = document.getElementById('circle');
cirbutton.addEventListener('click', insertCircle);

let tributton = document.getElementById('triangle');
tributton.addEventListener('click', insertTriangle);

/* Functions that insert the shape in shapecanvas */
function insertSquare(){
    let size = document.getElementById('sq-input').value;
    let xVal = randomVal(0,450-size);
    let yVal = randomVal(0,450-size);
    let sq = new Square(xVal,yVal,size);
}

function insertRectangle(){
    let recheight = document.getElementById('height-input').value;
    let recwidth = document.getElementById('width-input').value;
    let xVal = randomVal(0,450-recwidth);
    let yVal = randomVal(0,450-recheight);
    let rec  = new Rectangle(xVal,yVal,recheight,recwidth);
}

function insertCircle(){
    let radius = document.getElementById('cir-input').value;
    let xVal = randomVal(0,450-(radius*2));
    let yVal = randomVal(0,450-(radius*2));
    let cir = new Circle(xVal,yVal,radius);
}

function insertTriangle(){
    let size = document.getElementById('tri-input').value;
    let xVal = randomVal(0,450-size);
    let yVal = randomVal(0,450-size);
    let tri = new Triangle(xVal,yVal,size);
}

/*Random Value function*/
function randomVal(min,max){
    return Math.floor(Math.random() * (max-min) + min);
}
