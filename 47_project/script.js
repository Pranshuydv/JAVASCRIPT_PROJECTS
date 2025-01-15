function sortArray(order) {
    const arr = document.getElementById('arrayInput').value.split(',').map(Number);
    const sorted = arr.sort((a, b) => order === 'asc' ? a - b : b - a);
    document.getElementById('output').innerHTML = `Sorted Array: [${sorted}]`;
}
