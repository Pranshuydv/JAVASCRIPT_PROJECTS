const input_tag = document.querySelector('input');
const result = document.getElementById('result');


function check_strength(password) {

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/['A-Z']/.test(password)) strength++;
    if (/['0-9']/.test(password)) strength++;
    if (/['@#$%^&*!/<>?']/.test(password)) strength++;

    switch (strength) {
        case 1:
            return 'week'
            break;
        case 2:
            return 'medium'
            break;

        case 3:
            return 'strong'
            break;

        default:
            return ''
            break;
    }

}

function run_fun() {
    result.innerText = check_strength(input_tag.value);
}