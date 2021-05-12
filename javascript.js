let resume = {
    name : 'Vatsal Parikh',
    Career : 'Vice-Chair at IEEE ADIT CS SBC',
    Description : 'An avid learner interested in new technologies'
};

let interests = ['Football', 'Video Games', 'Coding', 'Watching TV shows'];
let allCaps = resume.name.toUpperCase();

console.log("RESUME");

console.log("Name: " + allCaps + "\nCareer: "+ resume.Career + "\nDescription: " + resume.Description);

console.log("My Interests: ");
for(i in interests){
    console.log("* " + interests[i] + "\n");
}

console.log("My Previous Experiences: ");
displayPosition('IEEE ADIT SB', 'Content Writer', '- Wrote technical and non-tech contents for events and social media pages.');
displayPosition('IEEE ADIT SB', 'Treasurer', '- Keeping account of the student branch fund.');

console.log("My Skills:");
displaySkill('English', false);
displaySkill('Cloud Computing', true);
displaySkill('Python', false);
displaySkill('C/C++', false);
displaySkill('Web Development', true);
displaySkill('Valorant', true);

function displayPosition(cname, jobtitle, description){
    console.log("* " + cname + " " + jobtitle + " " + description);
}

function displaySkill(skill, cool){
    if(cool == true){
        console.log("* BAM: " + skill);
    }
    else{
        console.log("* " + skill);
    }
}
