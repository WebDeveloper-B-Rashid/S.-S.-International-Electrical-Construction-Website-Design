 // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Form submission
        document.querySelector('.contact-form form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would normally send the form data to a server
            // For this example, we'll just show a success message
            const formContainer = this.parentElement;
            formContainer.innerHTML = `
                <div style="text-align: center; padding: 30px; background-color: rgba(255,255,255,0.1); border-radius: 10px;">
                    <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--accent-color); margin-bottom: 20px;"></i>
                    <h3 style="color: var(--accent-color); margin-bottom: 15px;">Message Sent Successfully!</h3>
                    <p>Thank you, ${name}. We have received your message and will contact you soon.</p>
                </div>
            `;
        });