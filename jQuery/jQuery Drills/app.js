
$(document).ready(function () {
    console.log("Ready");   //Step 1 

    $('#btnText').on('input change', function () {          //Step 7
        if ($(this).val() != '') {
            $('#btnSubmit').prop('disabled', false);
        }
        else {
            $('#btnSubmit').prop('disabled', true);
        }
    });

    $('#btnSubmit').on("click", function (e) {      //Steps 3 and 4
        var alertText = $('#btnText').val();
        e.preventDefault();

        alert(alertText);                           //Step 6 

        $('body').append('<ul>' + '<li>'+ alertText + '</li>' + '</ul>');   //Steps 12 and 13

        $('li').on('click', function(){         //Step 14

            var colorR = Math.floor((Math.random() * 256));
            var colorG = Math.floor((Math.random() * 256));
            var colorB = Math.floor((Math.random() * 256));

            $(this).css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");

        });

        $('li').on('dblclick', function(){      //Step 15

            $(this).remove();
            
        });

        /* STEPS 9 and 10 */

        /* $('h2').on('mouseover', function () {
            $(this).css({
                "background-color": "red",
                "border-radius": "10px"
            });
        }); */

    });

});


