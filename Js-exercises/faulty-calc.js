
//  FAULTY CALCULATOR

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






