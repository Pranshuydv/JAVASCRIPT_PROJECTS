function addStudent() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const marks = document.getElementById('marks').value.trim();

    if (name && age && marks) {
        document.getElementById('studentTable').innerHTML +=
            `<tr><td>${name}</td><td>${age}</td><td>${marks}</td></tr>`;
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('marks').value = '';
    } else {
        alert('Fill all fields!');
    }
}