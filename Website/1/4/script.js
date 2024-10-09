// script.js
$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Scroll progress indicator
    $(window).on('scroll', function() {
        const scrollPos = $(document).scrollTop();
        const docHeight = $(document).height() - $(window).height();
        const scrollPercent = (scrollPos / docHeight) * 100;
        $('.scroll-progress').css('width', scrollPercent + '%');

        // Show or hide scroll progress indicator
        if (scrollPercent > 0) {
            $('#scroll-prog').fadeIn();
        } else {
            $('#scroll-prog').fadeOut();
        }
    });

    // Modal popup for contact form submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        this.reset(); // Clear the form
    });

    // Toggle FAQ answers
    $('.faq-question').click(function() {
        const answer = $(this).next('.faq-answer');
        answer.toggleClass('active');
    });

    // Light/Dark mode toggle
    const toggleSwitch = document.getElementById('mode-toggle');
    toggleSwitch.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });
});