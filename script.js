document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate form submission success
    document.getElementById("formResponse").innerText = `Thank you, ${name}! Your message has been sent.`;
    this.reset(); // Reset form fields
});

function openModal(interviewType) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");

    // Set the content based on the interview type
    if (interviewType === 'student1') {
        modalTitle.innerText = "Student 1";
        modalText.innerText = "I felt like I had to take Science because my dad is a doctor. It’s really stressful.";
    } else if (interviewType === 'parent1') {
        modalTitle.innerText = "Parent 1";
        modalText.innerText = "I just want what’s best for my child. I thought top grades would ensure success.";
    } else if (interviewType === 'student2') {
        modalTitle.innerText = "Student 2";
        modalText.innerText = "I chose Art against my parents' wishes, and while it’s tough, I feel happier pursuing what I love.";
    } else if (interviewType === 'parent2') {
        modalTitle.innerText = "Parent 2";
        modalText.innerText = "I wish I had encouraged my child to follow her passion instead of imposing my dreams on her.";
    }

    modal.style.display = "block"; // Display the modal
}

function closeModal() {
    document.getElementById("modal").style.display = "none"; // Hide the modal
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
