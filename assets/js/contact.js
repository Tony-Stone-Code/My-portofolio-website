/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()

   // Get form values
   const name = document.getElementById('name').value.trim();
   const email = document.getElementById('email').value.trim();
   const message = document.getElementById('message').value.trim();

   // Simple validation
   if (!name || !email || !message) {
      contactMessage.textContent = 'Please fill in all fields';
      contactMessage.style.color = '#ff5252';
      setTimeout(() => {
         contactMessage.textContent = '';
      }, 5000);
      return;
   }

   // Email validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
      contactMessage.textContent = 'Please enter a valid email address';
      contactMessage.style.color = '#ff5252';
      setTimeout(() => {
         contactMessage.textContent = '';
      }, 5000);
      return;
   }

   // Simulate sending email (in real implementation, use EmailJS)
   contactMessage.textContent = 'Sending message...';
   contactMessage.style.color = '#4CAF50';

   // Simulate API call
   setTimeout(() => {
      contactMessage.textContent = 'Message sent successfully! ✅ I will get back to you soon.';
      contactMessage.style.color = '#4CAF50';
      
      // Clear form
      contactForm.reset();
      
      // Remove message after 5 seconds
      setTimeout(() => {
         contactMessage.textContent = '';
      }, 5000);
   }, 1500);

   /* 
   For real EmailJS implementation, uncomment and configure:
   
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#contact-form', 'YOUR_PUBLIC_KEY')
      .then(() => {
         contactMessage.textContent = 'Message sent successfully! ✅';
         contactMessage.style.color = '#4CAF50';
         
         setTimeout(() => {
            contactMessage.textContent = '';
         }, 5000);
         
         contactForm.reset();
      }, () => {
         contactMessage.textContent = 'Message not sent (service error) ❌';
         contactMessage.style.color = '#ff5252';
         
         setTimeout(() => {
            contactMessage.textContent = '';
         }, 5000);
      });
   */
}

contactForm.addEventListener('submit', sendEmail)

// Add input animations
const inputs = document.querySelectorAll('.contact__input');
inputs.forEach(input => {
   input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
   });
   
   input.addEventListener('blur', function() {
      if (!this.value) {
         this.parentElement.classList.remove('focused');
      }
   });
});
