function change_bg() {
    var bg_image = document.querySelector('img');
    var navBar = document.querySelector('nav');

    // console.log(bg_image.height);
    // console.log(window.scrollY);

    if (window.scrollY > bg_image.height - 90) {
        navBar.style.backgroundColor = 'red';
    } else {
        navBar.style.backgroundColor = 'whitesmoke';
    }


}