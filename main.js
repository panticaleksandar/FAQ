const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((el) => {
    el.addEventListener('click', faqActive);
})

function faqActive() {
    this.parentNode.classList.toggle("active");
}