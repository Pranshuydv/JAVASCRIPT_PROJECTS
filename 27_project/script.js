function roll_btn() {

    const icon_list = [
        'fa-solid fa-dice-six', 
        'fa-solid fa-dice-one', 
        'fa-solid fa-dice-two', 
        'fa-solid fa-dice-three', 
        'fa-solid fa-dice-four', 
        'fa-solid fa-dice-five',
    ];
    
    let a = Math.random() * (icon_list.length);
    let b = Math.floor(a);
    console.log(icon_list[b]);
    
    document.querySelector('i').className = icon_list[b];
}