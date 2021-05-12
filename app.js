var fullName = 'Vatsal';    //name
const states = 50;      //No of states in US
var result = 5 + 4;     //Addition

let vegetable = ['Potato','Cabbage','Carrot','Bitter Gourd'];

let pet = {
    petname : 'Bruno',
    breed : 'Labrador'
};

let person = [
    {
        name: 'Vatsal',
        age: 19
    },
    {
        name : 'Harvey',
        age:  45
    },

    {
        name : 'Donna',
        age:  41
    },

    {
        name : 'Mike',
        age:  30
    },

    {
        name : 'Lucy',
        age:  2
    },

];




sayHello();
checkAge('Charles',21);
checkAge('Abby',27);
checkAge('James',18);
checkAge('John',17);

for(var i = 0; i< vegetable.length; i++ ){
    console.log(vegetable[i]);
}

console.log(pet);

for(let i = 0; i < person.length ; i++){
    checkAge(person[i].name, person[i].age);
}

getLength('Hello World');

function sayHello(){
    alert('Hello World!');
}

function checkAge(name,age){
    if(age<21){
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

function getLength(word){
    if(word.length % 2 == 0){
        console.log('The world is nice and even!');
    }
    else{
        console.log('The world is an odd place!');
    }
}

