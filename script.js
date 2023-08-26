// var buttons  = document.querySelectorAll('.button');
// var display = document.getElementById('display');
// var operator = null;
// var operand1 =  0;
// var operand2 = null;
// for(var i = 0 ; i < buttons.length ; i++){
//     buttons[i].addEventListener("click", function(){
//        var value = this.getAttribute('data-value');
//        if(value == '+'){

//        }
//     });
// }

let screen = document.getElementById('display');
let btn = document.querySelectorAll('button');
let blankScreen = " ";
for (item of btn) {
    item.addEventListener('click', calculate);
    function calculate(e) {
        let btnText = e.target.dataset.value;
      
        if (btnText == "AC") {
            blankScreen = "";
            screen.innerHTML = blankScreen;
        }
        
        else if(btnText == "^"){
            btnText = eval(Math.pow());
            blankScreen += btnText;
            screen.innerHTML = blankScreen;
        }
        else if (btnText == "=") {
            screen.innerHTML = eval(blankScreen);
        }
        else if (btnText == "/100") {
            btnText = "*0.01";
            blankScreen += btnText;
            screen.innerHTML = blankScreen;
        }
        else {
            blankScreen += btnText;
            screen.innerHTML = blankScreen;
        }
    }
}
