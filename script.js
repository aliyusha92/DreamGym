// Function to calculate BMI
function calculateBMI(weight, height) {
    // Convert height from centimeters to meters
    height = height / 100;
    
    // Calculate BMI
    const bmi = weight / (height * height);
    
    return bmi.toFixed(2); // Return BMI rounded to 2 decimal places
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get user input
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDisplay = document.getElementById('result');
  
    // Parse input values as numbers
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
  
    // Check if input values are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultDisplay.textContent = 'Please enter valid values.';
    } else {
      // Calculate BMI
      const bmi = calculateBMI(weight, height);
  
      // Display the result
      resultDisplay.textContent = `Your BMI is: ${bmi}`;
  
      // You can add further logic here to categorize the BMI result (e.g., underweight, normal, overweight).
    }
  }
  
  // Attach the form submission event listener
  const bmiForm = document.getElementById('bmi-form');
  bmiForm.addEventListener('submit', handleFormSubmit);
  