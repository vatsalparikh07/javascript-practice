$(document).ready(function () {

    $("#keyboard-upper-container").hide();

    /* When shift key is pressed, it shows uppercase keyboard */
    $(document).keydown(function (e) {
        if (e.which == 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }
    })

    /* When shift key is released, it shows lowercase keyboard */
    $(document).keyup(function (e) {
        if (e.which == 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }
    })

});

/* When key is pressed, it gets highlighted and un-highlighted when released */

$(document).keypress(function (e) {

    var key = $("#" + e.which);
    $(key).css('background-color', 'yellow');

    $(document).keyup(function (e) {
        $(key).css('background-color', '');
    });

});

/* Global Declarations */

var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate']; 

var sentenceIndex = 0;
var letterIndex = 0;
var currentSentence = sentences[sentenceIndex];
var currentLetter = currentSentence[letterIndex];

const numberofWords = 54;
var numberofMistakes = 0;

let startTime = new Date().getTime();
let endTime = 0;

$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);

/* Keypress function */

$(document).keypress(function(e){

    if(sentenceIndex < sentences.length){       

        if(letterIndex < currentSentence.length){   

            /* Checks if character displayed is equal to the key pressed */
            if(currentLetter == e.key){         
                $('#feedback').append('<span class = \'glyphicon glyphicon-ok\'></span>');      

                letterIndex++;
                currentLetter = currentSentence[letterIndex];
                
                $('#target-letter').text(currentLetter);
                $('#yellow-block').css('left','+=17.5px');
            }

            else{

                $('#feedback').append('<span class = \'glyphicon glyphicon-remove\'></span>');
                numberofMistakes++;            

            }
        }

        /* Increments the sentence and resets other values */

        else{

            letterIndex = 0;
            sentenceIndex++;
            currentSentence = sentences[sentenceIndex];
            currentLetter = currentSentence[letterIndex];

            $('#sentence').text(currentSentence);
            $('#target-letter').text(currentLetter);
            $('#yellow-block').css('left','');
            $('#feedback').empty();

        }
    }

    else if(sentenceIndex == 5){   

        /* Calculates words per minute */
        endTime = new Date().getTime();
        let minutes = ((endTime - startTime)/(1000*60));
        let WPM = Math.round((numberofWords/minutes) - (2*numberofMistakes));       

        $('#sentence').css('text-align','center');
        $('#sentence').text('Your words per minute score is: ' + WPM);
        $('#feedback').empty();
        $('#feedback').text('No. of mistakes you made were: ' + numberofMistakes);
        $('#target-letter').empty();
        $('#yellow-block').hide();
        
        setTimeout(function(){
            if(confirm("Wanna Play Again?")){       
                location.reload();
            }
        },2000); 

    }
});
