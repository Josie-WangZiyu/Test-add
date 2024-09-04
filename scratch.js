document.getElementById('calcForm').addEventListener('submit', function(event) {
event.preventDefault();

// Get the input values
const param1 = parseFloat(document.getElementById('param1').value);
const param2 = parseFloat(document.getElementById('param2').value);

// Perform the calculation (example: sum of the two parameters)
const result = param1 + param2;

// Display the result
document.getElementById('result').innerText = 'The result is: ' + result;
});