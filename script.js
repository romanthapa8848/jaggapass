// Land Value Calculator
function calculateLandValue() {
  // Clear previous error messages
  const errorElement = document.getElementById("land-value-error");
  errorElement.innerText = ""; // Clear any previous error messages

  // Get the selected unit, total land area, and rate per unit from the form
  const landUnit = document.getElementById("land-unit").value;
  const totalLandArea = parseFloat(
    document.getElementById("total-land-area").value
  );
  const ratePerUnit = parseFloat(
    document.getElementById("rate-per-unit").value
  );

  // Check if totalLandArea and ratePerUnit are valid numbers
  if (isNaN(totalLandArea) || totalLandArea <= 0) {
    errorElement.innerText = "Please enter a valid number for total land area.";
    return;
  }
  if (isNaN(ratePerUnit) || ratePerUnit <= 0) {
    errorElement.innerText = "Please enter a valid rate per unit.";
    return;
  }

  // Calculate the total land value
  const totalLandValue = totalLandArea * ratePerUnit;

  // Display the calculated land value in the result input field
  document.getElementById("calculated-land-value").value =
    totalLandValue.toFixed(2);

  // Debugging step to check values
  console.log(
    `Unit: ${landUnit}, Area: ${totalLandArea}, Rate: ${ratePerUnit}, Total Value: ${totalLandValue}`
  );
}

// Land Unit Converter Function
function convertLandUnits() {
  // Clear any previous error message
  document.getElementById("conversion-error").innerText = "";

  // Conversion factors based on 1 unit to square feet
  const conversionFactors = {
    bigha: 72900,
    kattha: 3645,
    dhur: 182.25,
    ropani: 5476,
    aana: 342.25,
    paisa: 85.56,
    daam: 21.39,
  };

  // Get the from and to units
  const fromUnit = document.getElementById("from-unit").value;
  const toUnit = document.getElementById("to-unit").value;
  const unitValue = parseFloat(document.getElementById("unit-value").value);

  // Validate the input value
  if (isNaN(unitValue) || unitValue <= 0) {
    document.getElementById("conversion-error").innerText =
      "Please enter a valid value.";
    document.getElementById("converted-value").value = "";
    return;
  }

  // Convert the input value to square feet
  const valueInSquareFeet = unitValue * conversionFactors[fromUnit];

  // Convert from square feet to the target unit
  const convertedValue = valueInSquareFeet / conversionFactors[toUnit];

  // Display the result in the 'converted-value' input box
  document.getElementById("converted-value").value = convertedValue.toFixed(2);

  // Optional: Display the result in text format below
  document.getElementById(
    "conversion-result"
  ).innerText = `${unitValue} ${fromUnit} is equivalent to ${convertedValue.toFixed(
    2
  )} ${toUnit}.`;
}

// Attach event listeners after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Event listener for Land Value Calculator
  const calculateButton = document.getElementById("calculate-button");
  if (calculateButton) {
    calculateButton.addEventListener("click", calculateLandValue);
  }

  // Event listener for Land Unit Converter
  const convertButton = document.getElementById("convert-button");
  if (convertButton) {
    convertButton.addEventListener("click", convertLandUnits);
  }
});
