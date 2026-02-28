

        // first number
        let num1 = prompt("Enter the first number:");

        //second number
        let num2 = prompt("Enter the second number:");

        // Convert input from string to number
        num1 = Number(num1);
        num2 = Number(num2);

        // function to add numbers
        function addNumbers(a, b) {
            return a + b;
        }

        // calling the function and showing result
        let result = addNumbers(num1, num2);
        document.write("Sum is: " + result);
  