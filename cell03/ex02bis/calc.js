$(document).ready(function() {
    $("#calculate").click(function() {
        let left = parseFloat($("#left").val());
        let right = parseFloat($("#right").val());
        let operator = $("#operator").val();

        if (isNaN(left) || isNaN(right) || left < 0 || right < 0) {
            alert("Error :(");
            return;
        }

        if ((operator === "/" || operator === "%") && right === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result;

        switch (operator) {
            case "+":
                result = left + right;
                break;

            case "-":
                result = left - right;
                break;

            case "*":
                result = left * right;
                break;

            case "/":
                result = left / right;
                break;

            case "%":
                result = left % right;
                break;
        }

        alert(result);
        console.log(result);
    });
});