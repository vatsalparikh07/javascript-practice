let die = []

/* Created a class named Die */ 
class Die{
    
    /* Constructor with a property named value */
    constructor(value){
        this.value = value;
    }

    /*Roll Method */
    roll(){

        /* Updates the div on the page with the new value */
        this.div = document.createElement('div');
        this.value = this.randomNum();
        this.div.className = "square";
        this.div.innerText = this.value;
        document.getElementById('b2').appendChild(this.div); 

        /* Rolls the dice again on single click */
        this.div.addEventListener('click', () => {
            this.reroll();
        });

        /* Removes the dice on double click */
        this.div.addEventListener('dblclick', () =>{
            die.splice(die.indexOf(this), 1);
            this.div.remove();
        });

    }

    reroll(){
        this.value = this.randomNum();
        this.div.innerText = this.value;
    }

    /* Generates a random integer  b/w 1-6 */
    randomNum(){
        let rand = Math.floor((Math.random() * 6) + 1);
        return rand;
    }
    
}

/* Generates a new dice on click */
let button1 = document.getElementById("button1");
button1.addEventListener('click',function(){

    let newDie = new Die();
    let val = newDie.roll();
    die.push(newDie);

});

/* Rerolls all the existing dice on click */
let button2 = document.getElementById("button2");
button2.addEventListener('click',function(){
    
    for(let i = 0; i< die.length; i++){
        die[i].reroll();
    }

});

/* Generates sum of all the existing dice on click */
let button3 = document.getElementById("button3");
button3.addEventListener('click',function(){

    let sum = 0;
    for(let i = 0; i< die.length; i++){
        sum += die[i].value;
    }

    alert(`The sum of all the dice is ${sum}`); 

});

