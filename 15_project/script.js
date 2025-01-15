function cal_btn() {

    const loan_tag = document.getElementById('loan').value;
    const Interest_tag = document.getElementById('Interest').value;
    const month_tag = document.getElementById('Month_pay').value;

    interest = (loan_tag * (Interest_tag * 0.01)) / month_tag;


    monthlyPayment = ((loan_tag / month_tag ) + interest).toFixed(2);

    document.getElementById('result').innerText = monthlyPayment;


}