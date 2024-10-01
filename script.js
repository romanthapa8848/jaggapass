// Land Value Calculator
function calculateLandValue() {
    // Get the selected unit, total volume, and rate per unit from the form
    const landUnit = document.getElementById('land-unit').value;
    const totalVolume = parseFloat(document.getElementById('total-volume').value);
    const ratePerUnit = parseFloat(document.getElementById('rate-per-unit').value);

    // Check if totalVolume and ratePerUnit are valid numbers
    if (isNaN(totalVolume) || totalVolume <= 0) {
        alert('Please enter a valid number for total volume.');
        return;
    }
    if (isNaN(ratePerUnit) || ratePerUnit <= 0) {
        alert('Please enter a valid rate per unit.');
        return;
    }

    // Calculate the total land value
    const totalLandValue = totalVolume * ratePerUnit;

    // Display the calculated land value in the result input field
    document.getElementById('calculated-land-value').value = totalLandValue.toFixed(2);

    // Debugging step to check values
    console.log(`Unit: ${landUnit}, Volume: ${totalVolume}, Rate: ${ratePerUnit}, Total Value: ${totalLandValue}`);
}

// Land Unit Converter with From and To unit selection
function convertLandUnits() {
    // Conversion factors based on 1 unit to square feet
    const conversionFactors = {
        bigha: 72900,
        kattha: 3645,
        dhur: 182.25,
        ropani: 5476,
        aana: 342.25,
        paisa: 85.56,
        daam: 21.39
    };

    // Get the from and to units
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    const unitValue = parseFloat(document.getElementById('unit-value').value);

    // Validate the input value
    if (!unitValue || unitValue <= 0) {
        document.getElementById('conversion-result').innerText = 'Please enter a valid value.';
        return;
    }

    // Convert the input value to square feet
    const valueInSquareFeet = unitValue * conversionFactors[fromUnit];

    // Convert from square feet to the target unit
    const convertedValue = valueInSquareFeet / conversionFactors[toUnit];

    // Display the result in the 'converted-value' input box
    document.getElementById('converted-value').value = convertedValue.toFixed(2);

    // Optional: Display the result in text format below
    document.getElementById('conversion-result').innerText = 
        `${unitValue} ${fromUnit} is equivalent to ${convertedValue.toFixed(2)} ${toUnit}.`;
}
