document.getElementById("voteForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    
    if (selectedCandidate) {
        // Show confirmation message
        document.getElementById("confirmationMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("confirmationMessage").style.display = "none";
        }, 3000); // Hide confirmation after 3 seconds
    } else {
        alert("Please select a candidate before submitting your vote.");
    }
});
