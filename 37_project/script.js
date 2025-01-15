function toggleFAQ(faqNumber) {
    const answer = document.getElementById(`answer${faqNumber}`);
    answer.classList.toggle('close_box')
}