let running_total = 0;
let returnAns = "";
let operatorClicked = false;

const btn0 = document.querySelector(".btn-0");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btnD = document.querySelector(".divide");
const btnM = document.querySelector(".multiply");
const btnA = document.querySelector(".add");
const btnC = document.querySelector(".clear");
const btnS = document.querySelector(".sub");
const btnE = document.querySelector(".equal");
const resultString = document.querySelector(".answer");

function operation(sign, num1, num2){
    if(sign == "+"){
        return addFunction(num1,num2);
    }
    else if(sign == "-"){
        return subFunction(num1,num2);
    }
    else if(sign == "/"){
        return divFunction(num1, num2);
    }
    else {
        return multFunction(num1, num2);
    }
}

function addFunction(numOne, numTwo){
    let num1 = parseInt(numOne);
    let num2 = parseInt(numTwo);
    running_total = num1 + num2;
    return num1 + num2;
}

function subFunction(numOne, numTwo){
    let num1 = parseInt(numOne);
    let num2 = parseInt(numTwo);
    running_total = num1 - num2;
    return num1 - num2;
}

function divFunction(numOne, numTwo){
    let num1 = parseInt(numOne);
    let num2 = parseInt(numTwo);
    running_total = num1 / num2;
    return num1 / num2;
}

function multFunction(numOne, numTwo){
    let num1 = parseInt(numOne);
    let num2 = parseInt(numTwo);
    running_total = num1 * num2;
    return num1 * num2;
}

function clear(){
    running_total = 0;
    resultString.textContent = "";
    console.log(resultString);
}

btn0.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }

    returnAns += "0";
    resultString.textContent += "0";
})
btn1.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }

    returnAns += "1";
    resultString.textContent += "1";
})
btn2.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "2";
    resultString.textContent += "2";
})
btn3.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "3";
    resultString.textContent += "3";
})
btn4.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "4";
    resultString.textContent += "4";
})
btn5.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "5";
    resultString.textContent += "5";
})
btn6.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "6";
    resultString.textContent += "6";
})
btn7.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "7";
    resultString.textContent += "7";
})
btn8.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "8";
    resultString.textContent += "8";
})
btn9.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "9";
    resultString.textContent += "9";
})
btnD.addEventListener("click", () =>{
    returnAns += "/";
    resultString.textContent = "/";
    operatorClicked = true;
})
btnM.addEventListener("click", () =>{
    returnAns += "x";
    resultString.textContent = "x";
    operatorClicked = true;
})
btnA.addEventListener("click", () =>{
    returnAns += "+";
    resultString.textContent = "+";
    operatorClicked = true;
})
btnS.addEventListener("click", () =>{
    returnAns += "-";
    resultString.textContent = "-";
    operatorClicked = true;
})
btnC.addEventListener("click", () =>{
    clear();
})
btnE.addEventListener("click", () =>{
    return;
})






