function calculateBMI() {
    // Get user input values
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Calculate BMI
    var bmi = weight / (height * height);

    // Display the result
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
  }