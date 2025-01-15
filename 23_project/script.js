function input_value(key) {
    let old_value = document.querySelector('input').value;
    if (old_value == 0) {
        document.querySelector('input').value = key;
    }
    else {
        document.querySelector('input').value = old_value + key;
    }

}

function clear_cal() {
    document.querySelector('input').value = 0;
}

function cal_result() {
    let a = document.querySelector('input').value;
    let b = eval(a);
    document.querySelector('input').value = b;

}