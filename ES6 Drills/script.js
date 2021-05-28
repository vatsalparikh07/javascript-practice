/* Template Literals and Default Parameters Value */
function favMovie(name = "Tommy Wiseau" , movie = "The Room"){
    console.log(`My name is ${name} and my favourite movie is ${movie}!`);
}

favMovie();

/* Arrow Functions*/

let favmovie = (name = "Vatsal Parikh" , movie = "Avengers Infinity War") => console.log(`My name is ${name} and my favourite movie is ${movie}!`);
favmovie();

let getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

let getFirstNameConcise = fullName =>  fullName.split(' ')[0];

console.log(getFirstName('Vatsal Parikh'));
console.log(getFirstNameConcise('Mike Ross'));

let doMath = (a,b) => ({
    exponent : a**b,
    product : a*b
});

let result1 = doMath(4,2).exponent;
let result2 = doMath(4,2).product;
console.log(`The exponent and product are ${result1} and ${result2}.`)

/* Spread Syntax */

function foodPlace (name,location,favFood){
    console.log(`My name is ${name}, I live in ${location} and my favourite food is ${favFood}`);
}

let arr = ['Harvey','New York City', 'Bagel'];
foodPlace(...arr);

function myFullName(firstName){
    let Name = [...firstName];
    for(var i=0;i<1;i++){
        console.log(Name);
    }
}

let myName = 'Vatsal';
myFullName(myName);
