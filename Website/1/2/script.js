document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learn-more');
    
    learnMoreBtn.addEventListener('click', function() {
        window.scrollTo({
            top: document.getElementById('about').offsetTop,
            behavior: 'smooth'
        });
    });
});
