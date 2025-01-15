function generate() {
    let api_link = 'https://api.qrserver.com/v1/create-qr-code/?data=';
    let user_value = document.querySelector('input').value;
    document.querySelector('img').src = api_link + user_value;
}