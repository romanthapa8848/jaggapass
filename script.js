// Land Value Calculator
function calculateLandValue() {
    const landArea = document.getElementById('land-area').value;
    const pricePerUnit = document.getElementById('price-per-unit').value;

    if (landArea && pricePerUnit) {
        const totalValue = landArea * pricePerUnit;
        document.getElementById('calculation-result').innerText = `The total value of the land is: ${totalValue}`;
    } else {
        document.getElementById('calculation-result').innerText = 'Please fill in both fields.';
    }
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

    // Display the result
    document.getElementById('conversion-result').innerText = 
        `${unitValue} ${fromUnit} is equivalent to ${convertedValue.toFixed(2)} ${toUnit}.`;
}
