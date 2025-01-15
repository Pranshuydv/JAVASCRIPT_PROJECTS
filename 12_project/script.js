function char_count() {
    var a = document.getElementById('written_data');
    var b = document.getElementById('t_char');
    var c = document.getElementById('r_char');

    var total_value = a.value.length;

    b.innerText = total_value;

    c.innerText = a.getAttribute('maxlength') - total_value;


}