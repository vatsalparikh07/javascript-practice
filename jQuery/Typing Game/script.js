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

var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

var sentenceIndex = 0;
var letterIndex = 0;
var currentSentence = sentences[sentenceIndex];
var currentLetter = currentSentence[letterIndex];

$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);

$(document).keypress(function(e){
    console.log(currentLetter);
    if(sentenceIndex < sentences.length){
        if(letterIndex < currentSentence.length){    
            if(currentLetter == e.key){
                letterIndex++;
                currentLetter = currentSentence[letterIndex];
                $('#target-letter').text(currentLetter);
                $('#yellow-block').css('left','+=17.5px');
            }
        }
        else{
            letterIndex = 0;
            sentenceIndex++;
            currentSentence = sentences[sentenceIndex];
            currentLetter = currentSentence[letterIndex];
            $('#sentence').text(currentSentence);
            $('#target-letter').text(currentLetter);
            $('#yellow-block').css('left','');
        }
    }
});
