function click_pass(length) {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$!@#%&*-_+/';
    let password = '';

    for (let i = 0; i < length; i++) {

        var a = Math.random() * letters.length + 1;
        var b = Math.floor(a);
        password += letters[b];

        document.getElementById('result').value = password;
    }


}