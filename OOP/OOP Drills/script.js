/* Repetitive Object Literal usage */
let person1 = {
    name: 'Vatsal',
    sayHello: function(){
        console.log("Hello! My name is " + person1.name + ".");
    }
}

let person2 = {
    name: 'Lisa',
    sayHello: function(){
        console.log("Hello! My name is " + person2.name + ".");
    }
}

let person3 = {
    name: 'Rachel',
    sayHello: function(){
        console.log("Hello! My name is " + person3.name + ".");
    }
}

let person4 = {
    name: 'Courtney',
    sayHello: function(){
        console.log("Hello! My name is " + person4.name + ".");
    }
}

let person5 = {
    name: 'Jennifer',
    sayHello: function(){
        console.log("Hello! My name is " + person5.name + ".");
    }
}

/* Very repetitive and not recommended */

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

/* Pseudo Class creation using constructor function and object prototype method */
class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greet() {
        console.log(`Hey! My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`);
    }
}


let p1 = new Person('David','New York','67');
let p2 = new Person('Micheal','Delhi','26');
let p3 = new Person('Monica','Atlanta','30');
let p4 = new Person('Jenny','Vadodara','25');
let p5 = new Person('Munna','Mirzapur','30');

p1.greet();
p2.greet();
p3.greet();
p4.greet();
p5.greet();

/* ES6 Class Syntax */
class Human {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greet() {
        console.log(`Hey! My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`);
    }
}

let h1 = new Human('David','New York','67');
let h2 = new Human('Micheal','Delhi','26');
let h3 = new Human('Monica','Atlanta','30');
let h4 = new Human('Jenny','Vadodara','25');
let h5 = new Human('Munna','Mirzapur','30');

h1.greet();
h2.greet();
h3.greet();
h4.greet();
h5.greet();

/* Inheritance */

class Vehicle {
    constructor(type,wheels,manufacturer,doors){
        this.type = type;
        this.wheels = wheels;
        this.manufacturer = manufacturer;
        this.doors = doors;
    }
    aboutVehicle(){
        console.log(`Type of vehicle: ${this.type}, Manufactured by: ${this.manufacturer}, No. of wheels: ${this.wheels} `);
    }
}

class Truck extends Vehicle{
    constructor(type,wheels,manufacturer,doors,truckbed){
        super(type,wheels,manufacturer,doors);
        this.truckbed = truckbed;
    }
    aboutVehicle(){
        console.log(`Type of vehicle: ${this.type}, Manufactured by: ${this.manufacturer}, No. of wheels: ${this.wheels}, No. of doors: ${this.doors}, Does it have a truckbed : ${this.truckbed}`);
    }
}

class Sedan extends Vehicle{
    constructor(type,wheels,manufacturer,doors,size,mpg){
        super(type,wheels,manufacturer,doors);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle(){
        console.log(`Type of vehicle: ${this.type}, Manufactured by: ${this.manufacturer}, No. of wheels: ${this.wheels}, No. of doors: ${this.doors}, Size : ${this.size}, Mileage: ${this.mpg}`);
    }
}

class Motorcycle extends Vehicle{
    constructor(type,wheels,manufacturer,doors,steeringWheel,handleBars){
        super(type,wheels,manufacturer,doors);
        this.steeringWheel = steeringWheel;
        this.handleBars = handleBars;
    }
    aboutVehicle(){
        console.log(`Type of vehicle: ${this.type}, Manufactured by: ${this.manufacturer}, No. of wheels: ${this.wheels}, No. of doors: ${this.doors}, Does it have a steering wheel: ${this.steeringWheel}, but instead does it have a handle bar: ${this.handleBars}`);
    }
}

let v1 = new Vehicle('Activa',2,'Honda',0);
v1.aboutVehicle();

let v2 = new Truck('Truxo',18,'Mahindra', 2 , false);
v2.aboutVehicle();

let v3 = new Sedan('Amaze', 4, 'Honda', 4 , 'Small', '30kmpl' );
v3.aboutVehicle();

let v4 = new Motorcycle('Pulsar',2,'Bajaj',0,'No','Yes');
v4.aboutVehicle();
