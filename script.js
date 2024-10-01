document.addEventListener('DOMContentLoaded', function() {
    console.log('The page is fully loaded');
    // Additional JavaScript can go here
});

function calculateLandValue() {
    // Get user input values
    const landArea = document.getElementById('land-area').value;
    const pricePerUnit = document.getElementById('price-per-unit').value;

    // Validate the inputs
    if (landArea && pricePerUnit) {
        const totalValue = landArea * pricePerUnit;
        document.getElementById('calculation-result').innerText = `The total value of the land is: ${totalValue}`;
    } else {
        document.getElementById('calculation-result').innerText = 'Please fill in both fields.';
    }
}
