const red_EL = document.getElementById('red');
const green_EL = document.getElementById('green');
const blue_EL = document.getElementById('blue');
const alpha_EL = document.getElementById('alpha');

const result_EL = document.getElementById('result');
const new_bgc_EL = document.getElementById('new_bgc');

function change_bgc() {
    let new_bgc = `rgba( ${red_EL.value}, ${blue_EL.value}, ${green_EL.value}, ${alpha_EL.value} )`
    result_EL.style.background = new_bgc;
    result_EL.innerText = new_bgc;
}