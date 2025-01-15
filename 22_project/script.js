function update_Sec() {
    const sec_tag = document.getElementById('sec');
    let sec = sec_tag.innerText;

    let s = parseInt(sec);
    if (s == 59) {
        sec_tag.innerText = 0;
        update_min();
    } else {
        sec_tag.innerText = s + 1;
    }
    setTimeout(() => { update_Sec(); }, 1000);
}

function update_min() {
    const min_tag = document.getElementById('min');
    let min = min_tag.innerText;

    let m = parseInt(min);

    if (m == 59) {
        min_tag.innerText = 0;
        update_hour();
    }
    min_tag.innerText = m + 1;
}

function update_hour() {
    const hour_tag = document.getElementById('hour');
    let hour = hour_tag.innerText;

    let h = parseInt(hour);

    hour_tag.innerText = h + 1;
}

update_Sec();