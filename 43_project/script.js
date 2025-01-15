document.getElementById('reverseButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    const resultElement = document.getElementById('result');

    if (inputString === "") {
        resultElement.textContent = "Please enter a valid string.";
        resultElement.style.color = "red";
    } else {
        const reversedString = inputString.split('').reverse().join('');
        resultElement.textContent = `Reversed String: ${reversedString}`;
        resultElement.style.color = "green";
    }
});
