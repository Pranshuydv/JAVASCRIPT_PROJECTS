function generator_btn() {
    const input_value = document.getElementById('i_value').value;
    const result = document.getElementById('result');
    result.innerHTML = "";

    for (let i = 0; i < input_value; i++) {
        const p_tag = document.createElement('p');
        p_tag.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nulla totam hic. Accusamus doloribus ratione libero soluta at voluptas sequi expedita tempore omnis architecto. Perspiciatis quia architecto laborum dolor facere possimus incidunt eveniet deserunt.";
        result.appendChild(p_tag);
    }
}