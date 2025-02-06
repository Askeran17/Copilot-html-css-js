// Toggle navigation menu
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Add event listener to hamburger icon (if you have one)
// Assuming you have an element with class "hamburger"
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Add event listeners to filter buttons (if you have them)
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        filterProjects(category);
    });
});

// Lightbox effect for project images
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('#projects img');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});

// Form validation
const form = document.querySelector('#contact form');
form.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        e.preventDefault();
    }
});

// Real-time email validation feedback
const emailField = document.getElementById('email');
emailField.addEventListener('input', function() {
    if (emailField.validity.typeMismatch) {
        emailField.setCustomValidity('Please enter a valid email address.');
    } else {
        emailField.setCustomValidity('');
    }
});

// Debugging example
console.log('Script loaded successfully.');
