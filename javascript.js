let running_total = 0;
let returnAns = "";
let operatorClicked = false;
let lastInputWasOperator = false;

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

function operation(str, sign, num1, num2){
    arr = str.split(/[+\-x/]/);
    num1 = parseInt(arr[0]);
    sign = str.match(/[+\-x/]/)[0];
    num2 = parseInt(arr[1]);

    if (isNaN(num1) || isNaN(num2)) return 0;

    if(sign == "+"){
        return num1 + num2;
    }
    else if(sign == "-"){
        return num1 - num2;
    }
    else if(sign == "/"){
        return num1 / num2;;
    }
    else {
        return num1 * num2;
    }
}

function addFunction(numOne, numTwo){
    let num1 = parseInt(numOne);
    let num2 = parseInt(numTwo);
    running_total = num1 + num2;
    returnAns = "" + running_total;
    return running_total;
}

function subFunction(numOne, numTwo){
    let num1 = parseInt(numOne);
    let num2 = parseInt(numTwo);
    running_total = num1 - num2;
    returnAns = "" + running_total;
    return running_total;
}

function divFunction(numOne, numTwo){
    let num1 = parseInt(numOne);
    let num2 = parseInt(numTwo);
    running_total = num1 / num2;
    returnAns = "" + running_total;
    return running_total;
}

function multFunction(numOne, numTwo){
    let num1 = parseInt(numOne);
    let num2 = parseInt(numTwo);
    running_total = num1 * num2;
    returnAns = "" + running_total;
    return running_total;
}

function clear(){
    running_total = 0;
    resultString.textContent = "";
    returnAns = "" + running_total;
}

btn0.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }

    returnAns += "0";
    resultString.textContent += "0";
    lastInputWasOperator = false;
})
btn1.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }

    returnAns += "1";
    resultString.textContent += "1";
    lastInputWasOperator = false;
})
btn2.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "2";
    resultString.textContent += "2";
    lastInputWasOperator = false;
})
btn3.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "3";
    resultString.textContent += "3";
    lastInputWasOperator = false;
})
btn4.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "4";
    resultString.textContent += "4";
    lastInputWasOperator = false;
})
btn5.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "5";
    resultString.textContent += "5";
    lastInputWasOperator = false;
})
btn6.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "6";
    resultString.textContent += "6";
    lastInputWasOperator = false;
})
btn7.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "7";
    resultString.textContent += "7";
    lastInputWasOperator = false;
})
btn8.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "8";
    resultString.textContent += "8";
    lastInputWasOperator = false;
})
btn9.addEventListener("click", () =>{
    if (operatorClicked) {
        resultString.textContent = "";
        operatorClicked = false;
    }
    returnAns += "9";
    resultString.textContent += "9";
    lastInputWasOperator = false;
})
btnD.addEventListener("click", () =>{
    if (lastInputWasOperator) {
        alert("Error");
        return;
    }
    if (/[+\-x/]/.test(returnAns)) {
        const result = operation(returnAns);
        returnAns = result.toString();
    }

    returnAns += "/";
    resultString.textContent = "/";
    operatorClicked = true;
    lastInputWasOperator = true;
});
btnM.addEventListener("click", () =>{
    if (lastInputWasOperator) {
        alert("Error");
        return;
    }
    if (/[+\-x/]/.test(returnAns)) {
        const result = operation(returnAns);
        returnAns = result.toString();
    }

    returnAns += "x";
    resultString.textContent = "x";
    operatorClicked = true;
    lastInputWasOperator = true;
})
btnA.addEventListener("click", () =>{
    if (lastInputWasOperator) {
        alert("Error");
        return;
    }
    if (/[+\-x/]/.test(returnAns)) {
        const result = operation(returnAns);
        returnAns = result.toString();
    }

    returnAns += "+";
    resultString.textContent = "+";
    operatorClicked = true;
    lastInputWasOperator = true;
})
btnS.addEventListener("click", () =>{
    if (lastInputWasOperator) {
        alert("Error");
        return;
    }
    if (/[+\-x/]/.test(returnAns)) {
        const result = operation(returnAns);
        returnAns = result.toString();
    }

    returnAns += "-";
    resultString.textContent = "-";
    operatorClicked = true;
    lastInputWasOperator = true;
})
btnC.addEventListener("click", () =>{
    clear();
})
btnE.addEventListener("click", () =>{
    const result = operation(returnAns);
    resultString.textContent = result;
    returnAns = result.toString();
})






