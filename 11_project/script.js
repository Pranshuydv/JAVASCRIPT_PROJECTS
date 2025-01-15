function change_photo() {
    let photo = document.querySelector('img');
    let img_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    var a = Math.random() * img_array.length;
    var b = Math.floor(a);

    console.log(b);

    photo.src = 'img' + b + ".jpg";

}