document.addEventListener('DOMContentLoaded',function (){

    /* Object declarations in arrays */

    var friends = ['Arun','Beena','Chetan','Dhruv','Geeta'];

    var locationName = ['drawing room', 'dining room', 'kitchen' , 'balcony' , 'bedroom' , 
                        'store room' , 'washroom', 'study room', 'basement', 'veranda'];

    var weapon = ['scissors','knife','sniper rifle','pistol','sword','nail cutter','rod','blade','bomb','axe',
                    'pen','pencil','water bottle','broom','wire','fork','steel ruler','cutter','tong','stone'];

    for(var i = 0; i<100; i++){

        /*Creates 100 h3 elements */
        var h3 = document.createElement('h3');
        var h3Text = document.createTextNode('Accusation ' + (i+1) + "🔍");
        h3.appendChild(h3Text);
        document.body.appendChild(h3);

        /* Calls the function Accusation on click */
        h3.addEventListener('click',Accusation(i));
        
    }

    /*Uses the closure property to create a private variable so that the count i doesn't start from 101 */
    function Accusation(i){
        return function alertAccusation(){
            alert("Accusation " + (i+1) + ": I accuse " + friends[i%friends.length] + " with the " + weapon[i%weapon.length] + " in the " + locationName[i%locationName.length]);
        }
    }

});
