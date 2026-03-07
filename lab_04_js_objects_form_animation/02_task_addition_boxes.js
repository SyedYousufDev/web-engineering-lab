

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");


function calculateSum() {
    
    let val1 = parseInt(num1.value);
    let val2 = parseInt(num2.value);

    
    result.value = val1 + val2;
}

// Event handling
num1.addEventListener("input", function() {
    result.value = "NaN"; 
});

num2.addEventListener("input", calculateSum); 