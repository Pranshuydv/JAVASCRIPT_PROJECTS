function findMissingNumbers() {
    const arr = document.getElementById('arrayInput').value.split(',').map(Number);
    const missing = [];
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        if (!arr.includes(i)) missing.push(i);
    }
    document.getElementById('output').innerHTML = missing.length ? `Missing Numbers: [${missing}]` : `No missing numbers.`;
}