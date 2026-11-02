let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

// Number buttons
let numberButtons = document.querySelectorAll(".number");

let operatorButtons = document.querySelectorAll(".operator");
numberButtons.forEach(function(button){

        numberButtons.addEventListener("click", function(){
        
           if (operator === "") {
            firstNumber = firstNumber + button.innerText;
            display.value = firstNumber;
           }
         
           else {
            secondNumber = secondNumber + numberButtons.innerText;
            display.value = secondNumber;
           }
        })
})

operatorButtons.forEach(function(button){
    button.addEventListener("click", function(){
       operator = button.innertext;
    });
});

    
document.getElementById("equal").addEventListener("click", function(){

    let result;

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    if (operator == "+"){
        result = num1 + num2;
    }

    else if(operator == "-") {
        result= num1-num2;
    }

    else if (operator == "*"){
        result= num1 * num2;
    }

    else if (operator == "/"){

        if (num2 === 0){
            display.value = "cannot devide by 0. "
        }
        result = num1 / num2;
    }

    display.value = result;

    firstNumber = String(result);
    secondNumnber = "";
    operator = "";
});

document.getElementById("clear").addEventListener("click", function(){

    firstNumber = "";
    secondNumber = "";
    operator = "";

    display.value="";

});