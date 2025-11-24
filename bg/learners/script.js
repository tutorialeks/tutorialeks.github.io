// Form handling and interactions for bg/learners page

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
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

    // YouTube Course Form Handler
    const youtubeForm = document.getElementById('youtube-form');
    if (youtubeForm) {
        youtubeForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                consent: formData.get('consent') === 'on',
                type: 'youtube_course'
            };
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Изпращане...';
            submitBtn.disabled = true;
            
            try {
                // TODO: Replace with actual API endpoint
                console.log('YouTube course form data:', data);
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success message
                alert('Благодаря! Ще получиш линк към курса в следващите минути.');
                this.reset();
                
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Възникна грешка. Моля опитай отново или се свържи директно на info@tutorialeks.org');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Consultation Form Handler
    const consultationForm = document.getElementById('consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                language: formData.get('language'),
                level: formData.get('level'),
                challenge: formData.get('challenge'),
                type: 'consultation'
            };
            
            // Handle file upload if present
            const codeFile = formData.get('code_file');
            if (codeFile && codeFile.size > 0) {
                data.has_code_file = true;
                data.code_file_name = codeFile.name;
                // TODO: Implement file upload to server
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Изпращане...';
            submitBtn.disabled = true;
            
            try {
                // TODO: Replace with actual API endpoint
                console.log('Consultation form data:', data);
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success message
                alert('Благодаря за заявката! Ще се свържа с теб в рамките на 24 часа.');
                this.reset();
                
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Възникна грешка. Моля опитай отново или се свържи директно на info@tutorialeks.org');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Phone number formatting
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Auto-add +359 prefix for Bulgarian numbers
            if (value.length > 0 && !value.startsWith('359')) {
                if (value.startsWith('0')) {
                    value = '359' + value.substring(1);
                } else if (value.length < 12) {
                    value = '359' + value;
                }
            }
            
            // Format as +359 XX XXX XXXX
            if (value.startsWith('359')) {
                let formatted = '+359';
                if (value.length > 3) {
                    formatted += ' ' + value.substring(3, 5);
                }
                if (value.length > 5) {
                    formatted += ' ' + value.substring(5, 8);
                }
                if (value.length > 8) {
                    formatted += ' ' + value.substring(8, 12);
                }
                e.target.value = formatted;
            } else {
                e.target.value = '+' + value;
            }
        });
    });

    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, .service-card, .step, .problem-card, .solution-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // File input styling
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const fileName = e.target.files[0]?.name;
            if (fileName) {
                const label = this.parentElement.querySelector('label');
                if (label) {
                    label.textContent = `Избран файл: ${fileName}`;
                }
            }
        });
    });

    // Iframe height adjustment
    function adjustIframeHeights() {
        const iframes = document.querySelectorAll('iframe.iframe-container');
        iframes.forEach(iframe => {
            iframe.addEventListener('load', function() {
                try {
                    const iframeDoc = this.contentDocument || this.contentWindow.document;
                    const height = iframeDoc.body.scrollHeight;
                    this.style.height = height + 'px';
                } catch (e) {
                    // Cross-origin iframe, use predefined height
                    console.log('Cannot adjust iframe height due to cross-origin restrictions');
                }
            });
        });
    }

    adjustIframeHeights();

    // Add animation delay to hero elements
    const heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 15;
}

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        validatePhone
    };
}
