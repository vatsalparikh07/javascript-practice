document.addEventListener('DOMContentLoaded',function (){

    var friends = ['Arun','Beena','Chetan','Dhruv','Geeta'];

    var locationName = ['drawing room', 'dining room', 'kitchen' , 'balcony' , 'bedroom' , 
                        'store room' , 'washroom', 'study room', 'basement', 'veranda'];

    var weapon = ['scissors','knife','sniper rifle','pistol','sword','nail cutter','rod','blade','bomb','axe',
                    'pen','pencil','water bottle','broom','wire','fork','steel ruler','cutter','tong','stone'];

    for(var i = 1; i<101; i++){
        var h3 = document.createElement('h3');
        var h3Text = document.createTextNode('Accusation ' + i);
        h3.appendChild(h3Text);
        document.body.appendChild(h3);
    }

});