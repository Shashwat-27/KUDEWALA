document.getElementById('wasteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const wasteType = document.getElementById('wasteType').value;
    const quantity = document.getElementById('quantity').value;
    const wasteImage = document.getElementById('wasteImage').files[0];

    // Validate inputs
    if (!wasteType || !quantity || !wasteImage) {
        alert('Please fill in all fields.');
        return;
    }

    // You can process the form data here (e.g., send to a server)
    
    // Display a success message
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Successfully submitted ${quantity} kg of ${wasteType} waste!`;

    // Reset form
    document.getElementById('wasteForm').reset();
});
