document.addEventListener("DOMContentLoaded", function () {
    const emojis = document.querySelectorAll('.emoji');
    const selectedRating = document.getElementById('selected-rating');
    const likeButtons = document.querySelectorAll('.bx-like');
    const dislikeButtons = document.querySelectorAll('.bx-dislike');
    const feedbackPopup = document.getElementById('feedback-popup');
    const closePopupButton = document.getElementById('close-popup');

    let currentRating = 0;

    emojis.forEach(emoji => {
        emoji.addEventListener('click', () => {
            const rating = emoji.getAttribute('data-rating');
            currentRating = parseInt(rating);
            selectedRating.textContent = currentRating;
            highlightSelectedEmojis();
            // Send the rating to your backend
            sendRatingToBackend(currentRating);
        });
    });

    function highlightSelectedEmojis() {
        emojis.forEach(emoji => {
            const rating = emoji.getAttribute('data-rating');
            emoji.style.color = rating <= currentRating ? 'gold' : 'black';
        });
    }

    // Function to send rating to the backend
    function sendRatingToBackend(rating) {
        fetch("http://localhost:5500/save-rating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating: rating,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                // Rating saved successfully
                console("Rating Saved successfully..")
            } else {
                console.error("Failed to save rating to backend");
            }
        })
        .catch((error) => {
            console.error("Error sending rating to backend:", error);
        });
    }

    
    // Handle like button click for all course cards
    likeButtons.forEach((likeButton) => {
        likeButton.addEventListener('click', () => {
            // Show the common feedback popup
            feedbackPopup.style.display = 'block';
        });
    });
    
    // Handle dislike button click for each course card
    dislikeButtons.forEach((dislikeButton, index) => {
        dislikeButton.addEventListener('click', () => {
            // Redirect to the dislike.html page or perform other actions
            window.location.href = "dislike.html";
        });
    });

    // Handle close popup button click
    closePopupButton.addEventListener('click', () => {
        // Close the common feedback popup
        feedbackPopup.style.display = 'none';
    });
});
