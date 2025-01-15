const review_list = [
    { name: 'John Dee', place: 'San Francicso USA', profile: 'testimonials-1.jpg', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas autem, facere veritatis officia adipisci aspernatur voluptatum fugiat itaque id cum cumque repudiandae, amet odit accusamus sint perferendis ullam, sequi minus illum labore laborum!' },

    { name: 'kimiko', place: 'London', profile: 'testimonials-2.jpg', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas autem, facere veritatis officia adipisci aspernatur voluptatum fugiat itaque id cum cumque repudiandae, amet odit accusamus sint perferendis ullam, sequi minus illum labore laborum! Recusandae veritatis, perspiciatis a optio suscipit soluta quas nisi itaque necessitatibus quam nam similique! ' },

    { name: 'Siniko', place: 'UAE', profile: 'testimonials-3.jpg', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },

    { name: 'Walter ', place: 'UK', profile: 'testimonials-4.jpg', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas autem, facere veritatis officia adipisci aspernatur voluptatum fugiat itaque id cum cumque repudiandae, amet odit accusamus sint perferendis ullam, sequi minus illum labore laborum! ' },

    { name: 'Peter', place: 'Paris', profile: 'testimonials-5.jpg', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas autem, facere veritatis officia adipisci aspernatur voluptatum fugiat itaque id cum cumque repudiandae, amet odit accusamus sint perferendis ullam, sequi minus illum labore laborum! Recusandae veritatis, perspiciatis a optio suscipit soluta quas nisi itaque necessitatibus quam nam similique! Porro tempore, error impedit aut doloribus incidunt non, eius rerum illum cupiditate adipisci fugiat. Dolor suscipit autem explicabo modi, illo dolorem sequi.' },

    { name: 'Alexa', place: 'America', profile: 'testimonials-6.jpg', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas autem, facere veritatis officia adipisci aspernatur voluptatum fugiat itaque id cum cumque repudiandae, amet odit accusamus sint perferendis ullam, sequi minus illum labore laborum! Recusandae veritatis, perspiciatis a optio suscipit soluta quas nisi itaque necessitatibus quam nam similique!' },
]


const profile_img = document.querySelector('img');
const profile_name = document.querySelector('h2');
const profile_position = document.querySelector('h3');
const profile_about = document.querySelector('p');



function load_review(user) {
    profile_img.src = user.profile;
    profile_name.innerText = user.name;
    profile_position.innerText = user.place;
    profile_about.innerText = user.about;
}

let review_index = 0;
load_review(review_list[review_index]);

function prev_review() {
    review_index--;
    if (review_index < 0) {
        review_index = review_list.length - 1;
    }
    load_review(review_list[review_index]);
}

function next_review() {
    review_index++;
    if (review_index > review_list.length - 1) {
        review_index = 0;
    }
    load_review(review_list[review_index]);
}