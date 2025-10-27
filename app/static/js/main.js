// ============================================
// PARALLAX BACKGROUND EFFECT
// ============================================
document.addEventListener('mousemove', function(e) {
    const bgAnimation = document.querySelector('.bg-animation');
    if (bgAnimation) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        bgAnimation.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// ============================================
// FORM VALIDATION & ENHANCEMENT
// ============================================
const predictForm = document.querySelector('.form-grid');
if (predictForm) {
    // Add input validation feedback
    const inputs = predictForm.querySelectorAll('select, input[type="text"]');
    
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value) {
                this.style.borderColor = 'var(--success)';
                setTimeout(() => {
                    this.style.borderColor = 'var(--border)';
                }, 1000);
            }
        });

        // Real-time validation for weight input
        if (input.name === 'Weight(kg)') {
            input.addEventListener('input', function() {
                const value = parseFloat(this.value);
                if (value && (value < 0.69 || value > 4.7)) {
                    this.style.borderColor = '#ef4444';
                } else if (value) {
                    this.style.borderColor = 'var(--success)';
                }
            });
        }
    });

    // Form submission handler
    predictForm.addEventListener('submit', function(e) {
        const weightInput = this.querySelector('input[name="Weight(kg)"]');
        const weight = parseFloat(weightInput.value);
        
        if (weight && (weight < 0.69 || weight > 4.7)) {
            e.preventDefault();
            alert('Please enter a weight between 0.69 and 4.7 kg');
            weightInput.focus();
            return false;
        }

        // Show loading state
        const submitBtn = this.querySelector('.predict-btn');
        if (submitBtn) {
            submitBtn.textContent = '⏳ Predicting...';
            submitBtn.disabled = true;
        }
    });
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for scroll animations
document.querySelectorAll('.info-card, .process-card, .form-section').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ============================================
// DYNAMIC STATS COUNTER
// ============================================
function animateValue(element, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const number = entry.target.querySelector('.number');
            if (number) {
                const text = number.textContent;
                const value = parseFloat(text);
                const suffix = text.replace(/[0-9.]/g, '');
                animateValue(number, 0, value, 1500, suffix);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// ============================================
// TOOL ITEMS STAGGER ANIMATION
// ============================================
const toolItems = document.querySelectorAll('.tool-item');
toolItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.8)';
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
});

const toolObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
        }
    });
}, { threshold: 0.1 });

toolItems.forEach(item => toolObserver.observe(item));

// ============================================
// FEATURE ROWS STAGGER ANIMATION
// ============================================
const featureRows = document.querySelectorAll('.feature-row');
featureRows.forEach((row, index) => {
    row.style.opacity = '0';
    row.style.transform = 'translateX(-20px)';
    row.style.transition = `all 0.5s ease ${index * 0.05}s`;
});

const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.1 });

featureRows.forEach(row => featureObserver.observe(row));

// ============================================
// PIPELINE STEPS ANIMATION
// ============================================
const steps = document.querySelectorAll('.step');
steps.forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateX(-30px)';
    step.style.transition = `all 0.6s ease ${index * 0.15}s`;
});

const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.2 });

steps.forEach(step => stepObserver.observe(step));

// ============================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ============================================
document.addEventListener('keydown', function(e) {
    // Press '/' to focus on first form input
    if (e.key === '/' && !e.target.matches('input, select, textarea')) {
        e.preventDefault();
        const firstInput = document.querySelector('.form-grid select, .form-grid input');
        if (firstInput) firstInput.focus();
    }
});

// ============================================
// TOOLTIP FOR FORM FIELDS (Optional Enhancement)
// ============================================
const formGroups = document.querySelectorAll('.form-group');
formGroups.forEach(group => {
    const label = group.querySelector('label');
    const input = group.querySelector('select, input');
    
    if (label && input) {
        input.addEventListener('focus', function() {
            label.style.color = 'var(--primary)';
        });
        
        input.addEventListener('blur', function() {
            label.style.color = 'var(--text-secondary)';
        });
    }
});

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================
console.log('%c💻 Laptop Price Predictor', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cBuilt with ❤️ using Flask & Machine Learning', 'font-size: 12px; color: #8b5cf6;');
console.log('%cGitHub: https://github.com/khalidsbn/Laptop-Price-Predictor', 'font-size: 10px; color: #94a3b8;');

// ============================================
// PERFORMANCE MONITORING
// ============================================
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }, 0);
    });
}
