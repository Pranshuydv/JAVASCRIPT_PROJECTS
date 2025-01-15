function mergeArrays() {
    const arr1 = document.getElementById('arrayInput1').value.split(',').map(Number);
    const arr2 = document.getElementById('arrayInput2').value.split(',').map(Number);
    document.getElementById('output').innerHTML = `Merged Array: [${[...arr1, ...arr2]}]`;
}
