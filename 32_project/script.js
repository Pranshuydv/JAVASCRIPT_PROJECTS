const menu = document.getElementById('menu_list');

function open_btn() {
    menu.classList.add('show-menu');
    document.querySelector('.fa-bars').style.display = 'none';
    document.querySelector('.fa-x').style.display = 'block';
}

function close_btn() {
    document.querySelector('.fa-bars').style.display = 'block';
    document.querySelector('.fa-x').style.display = 'none';
    menu.classList.remove('show-menu');
    
}