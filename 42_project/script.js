function generateTable() {
    const num = parseInt(document.getElementById('number').value);
    const tableContainer = document.getElementById('tableContainer');
    
    if (isNaN(num)) {
        tableContainer.innerHTML = "<p>Please enter a valid number!</p>";
        return;
    }
    
    let tableHTML = '<table><tr><th>Number</th><th>Multiplier</th><th>Result</th></tr>';
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<tr>
                        <td>${num}</td>
                        <td>${i}</td>
                        <td>${num * i}</td>
                      </tr>`;
    }
    tableHTML += '</table>';
    tableContainer.innerHTML = tableHTML;
}