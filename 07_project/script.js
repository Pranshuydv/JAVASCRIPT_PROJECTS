function click_btn() {
    var a = Math.random() * (99999 - 1) + 1;
    var b = Math.floor(a);
    document.getElementById('result').value = b;
}