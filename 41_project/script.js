const generateBtn = document.getElementById('generateBtn');
const rowsInput = document.getElementById('rows');
const patternOutput = document.getElementById('patternOutput');

generateBtn.addEventListener('click', () => {
    const rows = parseInt(rowsInput.value);
    if (isNaN(rows) || rows <= 0) {
        patternOutput.textContent = "Please enter a valid number of rows.";
        return;
    }

    let pattern = '';
    for (let i = 1; i <= rows; i++) {
        pattern += '*'.repeat(i) + '\n';
    }

    patternOutput.textContent = pattern;
});