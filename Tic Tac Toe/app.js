let cells = document.querySelectorAll('.row > div');

console.log(cells);

for(var i = 0; i< cells.length ; i++){
    cells[i].addEventListener('click', cellClicked);
}

var count = 1;

function gameFinished(winPlayer){
    for(var i = 0; i< cells.length ; i++){
        cells[i].removeEventListener('click', cellClicked);         //Doesn't allow element to get re-clicked.
    }
    
    document.getElementById("board").addEventListener('dblclick', function(){window.location.reload()});    //Refreshes the game board on double click.
}

function cellClicked(e){

    /* Toggling Conditions */

    if(count % 2 != 0){
        e.target.textContent = 'X';
        e.target.removeEventListener('click',cellClicked);
    }
    else{
        e.target.textContent = 'O';
        e.target.removeEventListener('click',cellClicked);
    }
    
    count++;

    /* Winning Conditions */

    if(cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X'){
        document.getElementById("h2").innerHTML = "X WINS!";
        gameFinished('X');

    }
    else if(cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O'){
        document.getElementById("h2").innerHTML = "O WINS!";
        gameFinished('O');
    }
    else if(cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X'){
        document.getElementById("h2").innerHTML = "X WINS!";
        gameFinished('X');
    }
    else if(cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O'){
        document.getElementById("h2").innerHTML = "O WINS!";
        gameFinished('O');

    }
    else if(cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X'){
        document.getElementById("h2").innerHTML = "X WINS!";
        gameFinished('X');
    }
    else if(cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O'){
        document.getElementById("h2").innerHTML = "O WINS!";
        gameFinished('O');

    }
    else if(cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X'){
        document.getElementById("h2").innerHTML = "X WINS!";
        gameFinished('X');
    }
    else if(cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O'){
        document.getElementById("h2").innerHTML = "O WINS!";
        gameFinished('O');

    }
    else if(cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X'){
        document.getElementById("h2").innerHTML = "X WINS!";
        gameFinished('X');
    }
    else if(cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O'){
        document.getElementById("h2").innerHTML = "O WINS!";
        gameFinished('O');

    }
    else if(cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X'){
        document.getElementById("h2").innerHTML = "X WINS!";
        gameFinished('X');
    }
    else if(cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O'){
        document.getElementById("h2").innerHTML = "O WINS!";
        gameFinished('O');
    }
    else if(cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X'){
        document.getElementById("h2").innerHTML = "X WINS!";
        gameFinished('X');
    }
    else if(cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O'){
        document.getElementById("h2").innerHTML = "O WINS!";
        gameFinished('O');

    }
    else if(cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X'){
        document.getElementById("h2").innerHTML = "X WINS!";
        gameFinished('X');
    }
    else if(cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O'){
        document.getElementById("h2").innerHTML = "O WINS!";
        gameFinished('O');
    }

    else if(count === 10){
        document.getElementById("h2").innerHTML = "DRAW!";
        gameFinished();
    }
    
}

