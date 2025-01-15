const input_EL = document.querySelector('input');
const result_EL = document.getElementById('result');

function age_btn() {
    const input_value = input_EL.value;
    const user_age = new Date(input_value);
    const current_date = new Date();

    const c_year = current_date.getFullYear();
    const c_month = current_date.getMonth();

    const u_year = user_age.getFullYear();
    const u_month = user_age.getMonth();

    const age_month = c_month - u_month;
    const age_year = c_year - u_year;

    result_EL.innerText = age_year + ' Years ' + age_month + ' Months Old.'
}