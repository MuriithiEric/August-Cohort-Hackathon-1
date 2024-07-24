document.addEventListener('DOMContentLoaded', () => {  
  const contactForm = document.getElementById('contactForm');  
  contactForm.addEventListener('submit', function (event) {  
      event.preventDefault();  
      alert('Thank you for your message! I will get back to you shortly.');  
      contactForm.reset(); // Reset the form after submission  
  });  
});