function mode_change() {
    let btn = document.getElementById('btn');

    if (btn.classList == 'btn_on') {
        btn.classList.remove('btn_on');
        btn.style.backgroundColor = 'black';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

    } else {
        btn.classList.add('btn_on');
        btn.style.backgroundColor = 'white';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}