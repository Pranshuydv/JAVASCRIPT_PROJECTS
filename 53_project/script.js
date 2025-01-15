function calc() {
    const num = +document.getElementById('num').value;
    const op = +document.getElementById('op').value;
    document.getElementById('result').innerText = `Result: ${Math.pow(num, op)}`;
}