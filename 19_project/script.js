let System_date = new Date();

let date_name = document.querySelector('h1');
let day_name = document.querySelector('p');
let month_name = document.getElementById('month');
let year_name = document.querySelector('h2');

date_name.innerText = System_date.getDate();
day_name.innerText = System_date.toLocaleString( "en", { weekday: 'long'});
month_name.innerText = System_date.toLocaleString( "en", { month: 'long' });
year_name.innerText = System_date.getFullYear();