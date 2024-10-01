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

// Land Unit Converter
function convertLandUnits() {
    const conversionFactors = {
        bigha: { sq_ft: 72900, m2: 6772.63, ropani: 13.31 },
        kattha: { sq_ft: 3645, m2: 338.63 },
        dhur: { sq_ft: 182.25, m2: 16.93 },
        ropani: { sq_ft: 5476, m2: 508.72, aana: 16 },
        aana: { sq_ft: 342.25, m2: 31.8, paisa: 4 },
        paisa: { sq_ft: 85.56, m2: 7.95, daam: 4 },
        daam: { sq_ft: 21.39, m2: 1.99 }
    };

    const unitType = document.getElementById('unit-type').value;
    const unitValue = parseFloat(document.getElementById('unit-value').value);

    if (!unitValue || unitValue <= 0) {
        document.getElementById('conversion-result').innerText = 'Please enter a valid value.';
        return;
    }

    const selectedUnit = conversionFactors[unitType];

    const sqFeet = selectedUnit.sq_ft * unitValue;
    const mSquare = selectedUnit.m2 * unitValue;

    let result = `The equivalent land
