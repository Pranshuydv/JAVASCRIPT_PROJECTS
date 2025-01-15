function add_btn() {
    const result_El = document.getElementById('result');
    const input_El = document.getElementById('input_value');
    if (input_El.value != '') {
        const li_El = document.createElement('li');
        li_El.innerHTML = `
        <span>${input_El.value}</span>
        <div class="btns">
            <i class="fas fa-check-circle" onclick="markTaskComplete(this)"></i>
            <i class="fas fa-trash-alt" onclick="deleteTask(this)"></i>
        </div>
        `;

        result_El.appendChild(li_El);
        input_El.value = '';
    }
    else { alert("Please enter a value.") }
}

function markTaskComplete(element) {
    element.parentElement.parentElement.classList.toggle('checked');
}

function deleteTask(element) {
    element.parentElement.parentElement.remove();
}
