
const display = document.getElementById("display");

function appendTodisplay(input){
    display.value += input ;
}

function Clear(){
    display.value = "";
}
function calculate(){
    try{
      display.value = eval(display.value);  
    }
    catch(error){
        display.value ="Error";
    }
}


