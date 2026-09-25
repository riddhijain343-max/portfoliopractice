/* =========================================
   contact.js
   Contact Form Validation & Submission
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");

    function showFeedback(message, type) {
        if (formFeedback) {
            formFeedback.textContent = message;
            formFeedback.className = `form-feedback ${type}`;
            formFeedback.style.display = "block";
            
            if (type === "success") {
                setTimeout(() => {
                    formFeedback.style.display = "none";
                    formFeedback.className = "form-feedback";
                }, 5000);
            }
        } else {
            alert(message);
        }
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name")?.value.trim() || "";
            const email = document.getElementById("email")?.value.trim() || "";
            const subject = document.getElementById("subject")?.value.trim() || "";
            const message = document.getElementById("message")?.value.trim() || "";

            /* Check required fields */
            if (!name || !email || !subject || !message) {
                showFeedback("Please fill in all the required fields.", "error");
                return;
            }

            /* Email format validation */
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showFeedback("Please enter a valid email address.", "error");
                return;
            }

            /* Success feedback */
            showFeedback(`Thank you, ${name}! Your message has been sent successfully.`, "success");

            /* Reset form */
            contactForm.reset();
        });
    }
});