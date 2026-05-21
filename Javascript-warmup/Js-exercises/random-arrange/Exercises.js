/*  RANDOM BUSINESS NAME GENERATOR

 p1 - objetc ko as a array use kiye hai
let obj1={
1:"crazy",
2:"amazing",
3:"fire"
};
let obj2={  
1:"engine",
2:"food",
3:"garments"
};
let obj3={
1:"bros",
2:"limited",
3:"hub"
};

var rand1 = Math.floor(Math.random() * 3) + 1;
var rand2 = Math.floor(Math.random() * 3) + 1;
var rand3 = Math.floor(Math.random() * 3) + 1;
 console.log(obj1[rand1]+" "+obj2[rand2]+" "+obj3[rand3]);



 p2
 const set1 ="crazy,amazing,fire";
const set2 ="engine,food,garments";
const set3 ="bros,limited,hub";

function randomWord(set){
    const words = set.split(',');
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

const randomSet1 = randomWord(set1);
const randomSet2 = randomWord(set2);
const randomSet3 = randomWord(set3);
 const businessName  = `${randomSet1} ${randomSet2} ${randomSet3}`; 
 console.log(businessName);

*/










/*  FAULTY CALCULATOR

function faultyCalculator() {
   
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operator = prompt("Enter an operator (+, -, *, /):");

    const isFaulty = Math.random() < 0.1; // 10% chance of being faulty

    let result;

    if (isFaulty) {
        switch (operator) {
            case "+":
                result = num1 * num2; 
                break;
            case "-":
                result = num1 / num2;
                break;
            case "*":
                result = num1 + num2; 
                break;
            case "/":
                result = num1 ** num2;
                break;
            default:
                alert("Invalid operator!");
                return;
        }
    } else {
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                alert("Invalid operator!");
                return;
        }
    }

    alert(`The result is: ${result}`);
}


faultyCalculator();

*/








/*
//solution by CWH
let rand = Math.random();
let first, second, third;

if (rand < 0.33) {
    first = "crazy";
}
else if (rand < 0.66 && rand >= 0.33) {
    first = "amazing";
}
else {
    first = "fire";
}

let rand = Math.random();
if (rand < 0.33) {
    second = "engine";
}
else if (rand < 0.66 && rand >= 0.33) {
    second = "food";
}
else {
    second = "garments";
}

let rand = Math.random();
if (rand < 0.33) {
    third = "bros";
}
else if (rand < 0.66 && rand >= 0.33) {
    third = "limited";
}
else {
    third = "hub";
}

console.log(`${first} ${second} ${third}`);

*/












/*
// Program for factorial of number using reduce method
 
const num = parseFloat(prompt("Enter a number:"));

const factorial = (n) => {
    if (n === 0 || n === 1) return 1; // Base case for factorial
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => acc * cur, 1);
};

console.log(`Factorial of ${num} is: ${factorial(num)}`);
*/




/*

// Factorial of number using reduce 2
let num = 6;
let c = Array.from({ length: num }, (_, i) => i + 1);
const fact = (a, b) => a * b;
const factorial = c.reduce(fact);

console.log(`Factorial of ${num} is: ${factorial}`);

*/

/* 

// make a progrma to rnadomly give rNDOM COLOR TO BOXES USING SELECTIONS


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
<style>
    .cont{
       
        display:flex;
        justify-content: center;
        align-items: center;
        gap:20px;
    }
    .box{
        height:60px;
        width:100px;
        border:2px solid black;
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>
</head>
<body>
    <div class="cont">
        <div  id="1" class="box">erf</div>
        <div  id="2" class="box">ef</div>
        <div id="3"  class="box">sfr</div>
        <div  id="4" class="box">yh</div>
        <div  id="5" class="box">thh</div>
    </div>
    <script src="Exercises.js"></script>
</body>
</html>






method 1:

let numbers = [1, 2, 3, 4, 5];


for (let i = numbers.length - 1; i > 0; i--) {
  let randomIndex = Math.floor(Math.random() * (i + 1));
  [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
}

let a = numbers[0];
let b = numbers[1];
let c = numbers[2];
let d = numbers[3];
let e = numbers[4];

document.getElementById(a).style.backgroundColor= "red";
document.getElementById(b).style.backgroundColor= "green";
document.getElementById(c).style.backgroundColor= "blue";
document.getElementById(e).style.backgroundColor= "black";
document.getElementById(d).style.backgroundColor= "pink";

method 2: 

console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box");

let boxes = document.querySelector(".container").children;

function getRandomColor(){

let val1 = Math.ceil(0 + Math.random()* 255);
let val2 = Math.ceil(0 + Math.random()* 255);
let val3 =Math.ceil(0 + Math.random()* 255);
return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
e.style.backgroundColor = getRandomColor()
e.style.color = getRandomColor()
})


*/