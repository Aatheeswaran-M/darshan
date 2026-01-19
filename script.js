// Smooth fade-in effect on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function fadeInSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInSections);
    fadeInSections();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}

function showConfirmation(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Show a confirmation popup
    alert("Thank you for your message! We will get back to you soon.");

    // Optionally, you can submit the form programmatically after showing the popup
    event.target.submit();

    return false; // Prevent the default form submission
}

// Show the modal popup
function showConfirmation(event) {
    event.preventDefault(); // Prevent form submission
    const modal = document.getElementById("confirmationModal");
    modal.style.display = "flex"; // Show the modal
}

// Close the modal popup
function closeModal() {
    const modal = document.getElementById("confirmationModal");
    modal.style.display = "none"; // Hide the modal
}