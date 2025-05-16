const display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('.button'));

buttons.forEach(button =>{
    button.addEventListener("click", clicked);
})

currentOperator = null;
firstOperand = null;
secondOperand = null;


function clicked(event){

    let value = event.currentTarget.value||event.currentTarget.textContent;
    console.log("Clicked:", value);

    switch(value){
        case "C":
            display.textContent = "";
            break;
        case "+/-": 
            display.textContent = display.textContent * -1;
            break;
        case "%":
            display.textContent = display.textContent / 100;
            break;
        case "/":
            if(secondOperand){
                calc();
                currentOperator = "/";
            }
            else if(currentOperator){
                currentOperator = "/";
            }
            else {
                firstOperand = display.textContent;
                currentOperator = "/";
            }
            break;
        case "X":
            if(secondOperand){
                calc();
                currentOperator = "X";
            }
            else if(currentOperator){
                currentOperator = "X";
            }
            else {
                firstOperand = display.textContent;
                currentOperator = "X";
            }
            break;
        case "-":
            if(secondOperand){
                calc();
                currentOperator = "-";
            }
            else if(currentOperator){
                currentOperator = "-";
            }
            else {
                firstOperand = display.textContent;
                currentOperator = "-";
            }
            break;
        case "+":
            if(secondOperand){
                calc();
                currentOperator = "+";
            }
            else if(currentOperator){
                currentOperator = "+";
            }
            else {
                firstOperand = display.textContent;
                currentOperator = "+";
            }
            break;
        case "=":
            calc();
            break;
        default:
                if(firstOperand && !secondOperand){
                    rest();
                    display.textContent = value;
                    secondOperand = display.textContent;
                }
                else if(secondOperand){
                    display.textContent+= value;
                    secondOperand = display.textContent;
                }
                else{
                    display.textContent+= value;
                }
            break;

    }
}


function rest(){
    display.textContent = "";
}

function calc() {
    switch(currentOperator){
        case "/":
            display.textContent = +firstOperand / +secondOperand;
            break;
        case "X":
            display.textContent = +firstOperand * +secondOperand;
            break;
        case "-":
            display.textContent = +firstOperand - +secondOperand;
            break;
        case "+":
            display.textContent = +firstOperand + +secondOperand;
            break;
    }
    currentOperator = null;
    firstOperand = display.textContent;
    secondOperand = null;

}