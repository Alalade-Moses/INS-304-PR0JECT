document.getElementById('footprint-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user inputs
    const energyUsage = document.getElementById('energy').value;
    const transportation = document.getElementById('transport').value;
    const diet = document.getElementById('diet').value;

    // Simple calculation logic (you can replace this with real-world calculations)
    let carbonFootprint = (energyUsage * 0.233) + (transportation * 0.12);

    if (diet === 'omnivore') {
        carbonFootprint += 1.5;
    } else if (diet === 'vegetarian') {
        carbonFootprint += 1.0;
    } else if (diet === 'vegan') {
        carbonFootprint += 0.5;
    }

    // Display result
    document.getElementById('result').innerText = `Your estimated carbon footprint is: ${carbonFootprint.toFixed(2)} tons of CO2 per year.`;
});


// offset
// script.js

document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form inputs
    const travelDistance = document.getElementById('travelDistance').value;
    const electricityUsage = document.getElementById('electricityUsage').value;
    const gasUsage = document.getElementById('gasUsage').value;

    // Carbon emission factors (approximate values)
    const CARBON_PER_KM_TRAVEL = 0.12; // kg CO2 per km (average car)
    const CARBON_PER_KWH_ELECTRICITY = 0.527; // kg CO2 per kWh
    const CARBON_PER_CUBIC_METER_GAS = 2.1; // kg CO2 per cubic meter

    // Calculate total carbon emissions
    const travelCarbon = travelDistance * CARBON_PER_KM_TRAVEL;
    const electricityCarbon = electricityUsage * CARBON_PER_KWH_ELECTRICITY;
    const gasCarbon = gasUsage * CARBON_PER_CUBIC_METER_GAS;

    const totalCarbon = (travelCarbon + electricityCarbon + gasCarbon).toFixed(2);

    // Display the result
    document.getElementById('carbonOutput').textContent = totalCarbon;
    document.getElementById('result').classList.remove('hidden');
});

document.getElementById('offsetButton').addEventListener('click', function() {
    alert('Thank you for your contribution to offsetting your carbon footprint!');
});

