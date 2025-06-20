// Get the "Execute" button and the "Result" element from the DOM
const btnExecute = document.getElementById("btn-execute")
const result = document.getElementById("result")

// Add a click event listener to the button
btnExecute.addEventListener('click', function () {
    // Get the values entered in the name and age input fields
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    let message

    // Check if the age is a valid number and under 18
    if (age < 18 && age > 0){
        message = " you are underage. Keep learning and enjoying coding!"   
    }
    // Check if the user is 18 or older
    else if (age >= 18){
        message = " you are now an adult. Get ready for great opportunities in the world of programming!"
    }
    // If the input is not a valid age
    else{
        message = " Error: Please enter a valid age in numbers."
    }

    // Display the final message in the "Result" element
    result.textContent = `Hello, ${name}` + message;
})