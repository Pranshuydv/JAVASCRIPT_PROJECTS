function click_btn() {
    var a = Math.random() * (99999 - 1) + 1;
    var b = parseInt(Math.floor(a));
    document.getElementById('result').value = b;
}

function submit_btn() {
    var otp_value = document.getElementById('otp_submit').value;
    var gen_Otp = document.getElementById('result').value;
    if (otp_value == '') {
        alert('OTP IS NOT FILL')
    } else if (gen_Otp == otp_value) {
        alert('OTP IS VALID');
    }

    else {
        alert('OTP IS NOT VALID')
    }

}