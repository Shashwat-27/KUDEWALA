document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulating form submission success
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `<p>Thank you, ${name}! Your message has been received.</p>`;
    
    // Clear form
    this.reset();
});
