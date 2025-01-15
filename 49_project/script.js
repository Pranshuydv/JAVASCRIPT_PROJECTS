function removeDuplicates() {
    const arr = document.getElementById('arrayInput').value.split(',').map(Number);
    const uniqueArr = [...new Set(arr)];
    document.getElementById('output').innerHTML = `Array without duplicates: [${uniqueArr}]`;
}
