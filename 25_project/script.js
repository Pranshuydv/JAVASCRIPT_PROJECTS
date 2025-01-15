let current_min_sec = 0;
let current_sec = 0;
let current_min = 0;

let intervalId; 
let isRunning = false; 

function update_min_sec() {
    if (current_min_sec === 99) { 
        current_min_sec = 0;
        update_sec();
    } else {
        current_min_sec += 1;
    }
    document.getElementById('mini-sec').innerText = current_min_sec.toString().padStart(2, '0');
}

function update_sec() {
    if (current_sec === 59) {
        current_sec = 0;
        update_min();
    } else {
        current_sec += 1;
    }
    document.getElementById('sec').innerText = current_sec.toString().padStart(2, '0');
}

function update_min() {
    if (current_min === 59) {
        current_min = 0;
    } else {
        current_min += 1;
    }
    document.getElementById('min').innerText = current_min.toString().padStart(2, '0');
}

function start() {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(update_min_sec, 10); 
    }
}

function stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(intervalId); 
    }
}

function reset() {
    stop(); // Ensure the stopwatch is stopped before resetting
    current_min_sec = 0;
    current_sec = 0;
    current_min = 0;
    document.getElementById('mini-sec').innerText = "00";
    document.getElementById('sec').innerText = "00";
    document.getElementById('min').innerText = "00";
}


