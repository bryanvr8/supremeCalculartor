// (function (){
//     alert("Hello World!")
// })();

function sum() {
    let n1 = parseInt(document.getElementById("num1").value)
    let n2 = parseInt(document.getElementById("num2").value)
    let box = document.getElementById("result");

    let result = n1 + n2;
    alert("Processing...")
    box.innerHTML = "<div class=resultado><h2>The sum result is " + result + "</h2></div>"

}
function sumClass() {
    let numbers = document.getElementsByClassName("number");
    let box = document.getElementById("result");

    let result = parseInt(numbers[0].value) + parseInt(numbers[1].value);
    alert("Processing...")
    box.innerHTML = "<div class=resultado><h2>The sum result is " + result + "</h2></div>"

}
function sumTag() {
    let numbers = document.getElementsByTagName("input");
    let box = document.getElementById("result");
    let numbersTrue = [];

    for (let x = 0; x < numbers.length; x++) {
        if (isNaN(numbers[x].value)) {
            numbersTrue.push(numbers[x])
        }
    }

    let result = parseInt(numbers[4].value) + parseInt(numbers[5].value);
    alert("Processing...")
    box.innerHTML = "<div class=resultado><h2>The sum result is " + result + "</h2></div>"

}
function sumQuery(){
    let numbers = document.querySelectorAll(".numberQuery");
    let buttons = document.getElementsByTagName("button");

    let box = document.getElementById("result");

    let result = parseInt(numbers[0].value)+parseInt(numbers[1].value);
    box.innerHTML = "<h1>The sum result is "+result+"</h1>";

}