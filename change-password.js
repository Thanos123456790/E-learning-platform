document.addEventListener("DOMContentLoaded", function () {
    const changePasswordForm = document.getElementById("change-password-form");

    if (changePasswordForm) {
        changePasswordForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value; // Retrieve email from the hidden field
            const newPassword = document.getElementById("new-password").value;

            // Send a request to update the password
            fetch("https://e-learning-backend-10.onrender.com/change-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, newPassword }),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((passwordChangeResult) => {
                if (passwordChangeResult.success) {
                    // Password changed successfully, you can redirect to a login page or display a success message
                    alert("Password changed successfully.");
                    // Redirect to login page, assuming you have a login.html
                    window.location.href = "login.html";
                } else {
                    // Password change failed, handle the error accordingly
                    alert("Password change failed. Please try again.");
                }
            })
            .catch((error) => {
                console.error('Password Change Error:', error);
                alert("An error occurred during password change.");
            });
        });
    }
});
