// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Hire Me button smooth scroll
document.querySelector('.hire-me-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
    });
});

// EmailJS Integration
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Send email using EmailJS
    emailjs.send('service_r86vosn', 'template_itssbgp', formData)
        .then(function(response) {
            alert('Thank you for your message! I will get back to you soon.');
            document.getElementById('contact-form').reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }, function(error) {
            alert('Oops! Something went wrong. Please try again later.');
            console.error('EmailJS Error:', error);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });
});
