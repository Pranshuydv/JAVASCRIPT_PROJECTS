function filterNumbers() {
    const input = document.getElementById('arrayInput').value;
    const arr = input.split(',').map(Number);

    // Filter positive and negative numbers
    const positiveNumbers = arr.filter(num => num > 0);
    const negativeNumbers = arr.filter(num => num < 0);

    // Display the result
    document.getElementById('output').innerHTML = `
        Positive Numbers: [${positiveNumbers}] <br> 
        Negative Numbers: [${negativeNumbers}]
    `;
}