function findEvenOdd() {
    const nums = document.getElementById('numbers').value.split(',').map(Number);
    const even = nums.filter(n => n % 2 === 0).join(', ') || 'None';
    const odd = nums.filter(n => n % 2 !== 0).join(', ') || 'None';
    document.getElementById('even').textContent = even;
    document.getElementById('odd').textContent = odd;
}