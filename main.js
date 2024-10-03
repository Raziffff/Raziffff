document.getElementById("complaintForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const confirmationDiv = document.getElementById("confirmation");

    // Show confirmation message
    confirmationDiv.style.display = "block";
    
    // Reset form fields
    this.reset();

    // Hide confirmation message after 3 seconds
    setTimeout(function() {
        confirmationDiv.style.display = "none";
    }, 3000); // 3000 milliseconds = 3 seconds
});

// Add event listener for "Lihat Aspirasi Mahasiswa" button
document.getElementById("viewAspirations").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "ASPIRATION.HTML";
});
