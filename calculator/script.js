let input = document.getElementById("inp11")


function clar(value) {
   input.value="";
}
function display(value){
    input.value+=value;
    }
    
 function calculate() {
     var p = input.value;
     var q = eval(p);
    input.value = q;
 }
 