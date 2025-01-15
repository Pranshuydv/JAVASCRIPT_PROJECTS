function calculateSum() {
    const arr = document.getElementById('arrayInput').value.split(',').map(Number);
    const sum = arr.reduce((acc, num) => acc + num, 0);
    document.getElementById('output').innerHTML = `Sum: ${sum}`;
}
