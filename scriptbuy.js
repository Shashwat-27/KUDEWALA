document.getElementById('wasteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const wasteType = document.getElementById('wasteType').value;
    const quantity = document.getElementById('quantity').value;
    const remarks = document.getElementById('remarks').value;

    if (wasteType && quantity) {
        document.getElementById('message').innerText = `Thank you! You have offered to sell ${quantity} of ${wasteType} waste.`;
        document.getElementById('wasteForm').reset();
    } else {
        document.getElementById('message').innerText = 'Please fill out all fields.';
    }
});
