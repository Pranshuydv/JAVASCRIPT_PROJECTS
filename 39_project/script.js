const filterButtons_El = document.querySelectorAll('.filter-btn');
const portfolioItems_El = document.querySelectorAll('.portfolio>.item');

filterButtons_El.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons_El.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        portfolioItems_El.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
