function minus_btn() {
    var minus = document.getElementById('result').innerText;
    document.getElementById('result').innerText = parseInt(minus) - 1;

    if (minus < 1) {

        document.getElementById('result').style.color = 'red';

    }

}
function reset_btn() {
    document.getElementById('result').innerText = 0;
    document.getElementById('result').style.color = 'black';



}
function plus_btn() {
    var plus = document.getElementById('result').innerText;
    document.getElementById('result').innerText = parseInt(plus) + 1;


    if (plus >= 0) {

        document.getElementById('result').style.color = 'green';

    }


}