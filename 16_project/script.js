let i = 0;
function progress_load() {
    document.querySelector("h3").innerText = i + '%';
    document.querySelector(".bar").style.width = i + '%';
    i++;


    if (i < 101) {
        setTimeout(progress_load, 20);

    }



}