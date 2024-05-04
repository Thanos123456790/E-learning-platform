document.addEventListener("DOMContentLoaded", function () {
    const sendFeedbackButton = document.getElementById("send-feedback");
    const feedbackMessageInput = document.getElementById("feedback-message");
    const feedbackPopup = document.getElementById("feedback-popup");
    const closePopupButton = document.getElementById("close-popup");

    sendFeedbackButton.addEventListener("click", function () {
        const feedbackMessage = feedbackMessageInput.value;

        // Send the feedback message to your backend
        fetch("https://e-learning-backend-10.onrender.com/send-feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: feedbackMessage,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                // Display the feedback popup
                feedbackPopup.style.display = "flex";
            } else {
                alert("Failed to send feedback. Please try again later.");
            }
        })
        .catch((error) => {
            console.error("Error sending feedback:", error);
            alert("Failed to send feedback. Please try again later.");
        });
    });

    // Close the feedback popup when the "Close" button is clicked
    closePopupButton.addEventListener("click", function () {
        feedbackPopup.style.display = "none";
        feedbackMessageInput.value = ""; // Clear the input field
    });
});
