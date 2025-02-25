
window.addEventListener('scroll', function () {
    console.log(window.scrollY);


    if (window.scrollY >= 700 && window.scrollY <= 1490) {
        console.log(window.scrollY);
        document.body.style.backgroundColor = '#ff608c';
    }

    else if (window.scrollY >= 1490 && window.scrollY <= 2270) {
        document.body.style.backgroundColor = 'white';
    }

    else if (window.scrollY >= 2270 && window.scrollY <= 3050) {
        document.body.style.backgroundColor = '#00C1B5';
    }

    else if (window.scrollY >= 3050 && window.scrollY <= 3850) {
        document.body.style.backgroundColor = '#FF6519';
    }

    else if (window.scrollY >= 3850 && window.scrollY <= 4620) {
        document.body.style.backgroundColor = '#FFBE00';
    }

    else if (window.scrollY >= 4620 && window.scrollY <= 5410) {
        document.body.style.backgroundColor = '#1D3FBB';
    }

    else if (window.scrollY >= 5410) {
        document.body.style.backgroundColor = '#E30512';
    }

    else {
        document.body.style.backgroundColor = '#F6E0A4';

    }

});

