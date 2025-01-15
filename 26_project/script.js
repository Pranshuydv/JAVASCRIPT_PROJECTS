const c_tail_tag = document.getElementById('tail_btn');
const c_head_tag = document.getElementById('head_btn');
const img_tag = document.querySelector('img');

let c_tail_value = 0;
let c_head_value = 0;

function flip_btn() {
    const num = ['head.jpeg', 'tails.jpg'];
    var a = Math.random() * num.length;
    var b = Math.floor(a);
    img_tag.src = num[b];

    if (b == 1) {
        c_tail_value ++;
    } else {
        c_head_value ++;
    }

    c_tail_tag.innerText = c_tail_value;
    c_head_tag.innerText = c_head_value;
}

function reset_btn() {
    c_tail_tag.innerText = 0;
    c_head_tag.innerText = 0;
}