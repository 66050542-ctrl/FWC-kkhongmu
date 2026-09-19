function calculate() {
    var left = document.getElementById("left").value;
    var right = document.getElementById("right").value;
    var operator = document.getElementById("operator").value;

    var num1 = Number(left);
    var num2 = Number(right);

    if (left === "" || right === "" ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 < 0 || num2 < 0) {
        alert("Error :(");
        return;
    }

    if ((operator === "/" || operator === "%") && num2 === 0) {
        alert("It's over 9000!");
        return;
    }

    var result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else if (operator === "%") {
        result = num1 % num2;
    }

    console.log(result);
    alert(result);
}

document.getElementById("tryme").addEventListener("click", calculate);

setInterval(function() {
    alert("Please, use me...");
}, 30000);