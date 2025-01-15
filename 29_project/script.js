const hour = document.getElementById('hour_btn');
const min = document.getElementById('min_btn');
const sec = document.getElementById('sec_btn');

function update_time() {
    let hour_now = new Date().getHours();
    let min_now = new Date().getMinutes();
    let sec_now = new Date().getSeconds();


    h = hour_now < 10 ? "0" + hour_now : hour_now;
    m = min_now < 10 ? "0" + min_now : min_now;
    s = sec_now < 10 ? "0" + sec_now : sec_now;

    hour.innerText = h;
    min.innerText = m;
    sec.innerText = s;

    setTimeout(() => { update_time(); }, 1000)
}

update_time()
