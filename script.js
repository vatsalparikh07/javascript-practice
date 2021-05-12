var fname = ['Harry','Hermione','Ron','Draco','Luna'];

for (var i = 0; i< fname.length; i++){
    console.log(fname[i] + ":\n");
    for(var j = 99; j> 0 ; --j ){
        if(j == 1){
            console.log( j + " line of code in the file, " + j + " line of code; " + fname[i] + " strikes one out, clears it all out, " + "no more lines of code in the file");
        }
        else{
        console.log( j + " lines of code in the file, " + j + " lines of code; " + fname[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file");
        }
    }
}