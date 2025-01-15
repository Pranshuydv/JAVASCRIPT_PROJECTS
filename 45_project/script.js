function findMaxMin() {
    const arr = document.getElementById('arrayInput').value.split(',').map(Number);
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    document.getElementById('output').innerHTML = `Max: ${max} <br> Min: ${min}`;
}
