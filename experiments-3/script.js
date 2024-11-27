/* script.js */
document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Basic validation
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const eventSelected = document.getElementById('event').value;

    if (!fullName || !email || !phone || !eventSelected) {
        alert('Please fill out all required fields.');
        return;
    }

    // If all validations pass
    alert('Registration successful!');
    this.reset(); // Reset the form after submission
});
