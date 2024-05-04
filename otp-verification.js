document.addEventListener("DOMContentLoaded", function () {
  const otpVerificationForm = document.getElementById("otp-verification-form");
  const verificationMessage = document.getElementById("verification-message");
  const resendOTPButton = document.getElementById("resend-otp-button");
  const countdownTimer = document.getElementById("countdown-timer"); // Add this line
  
  // Get the email from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");
  
  let timerInterval; // Variable to hold the timer interval
  
  // Function to start the countdown timer
  function startTimer(durationInSeconds) {
    let seconds = durationInSeconds;
    
    timerInterval = setInterval(function () {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      
      countdownTimer.textContent = `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
      
      if (seconds <= 0) {
        clearInterval(timerInterval);
        countdownTimer.textContent = "0:00";
        // Redirect to another page when the timer reaches zero
        window.location.href = "register.html"; // Change this to your desired page
      }
      
      seconds--;
    }, 1000);
  }
  
  // Function to stop and reset the timer
  function resetTimer() {
    clearInterval(timerInterval);
    countdownTimer.textContent = "10:00"; // Reset the timer display to 10 minutes
  }
  
  // Start the 10-minute timer when the page loads
  startTimer(600); // 600 seconds = 10 minutes
  
  otpVerificationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const enteredOTP = document.getElementById("otp").value;
    
    // Make a POST request to verify the entered OTP
    fetch(`https://e-learning-backend-10.onrender.com/verify-otp?email=${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp: enteredOTP }),
    })
    .then((response) => {
      // Clear the timer when the form is submitted
      resetTimer();
      
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then((loginResult) => {
      if (loginResult.success) {
          // Login successful, redirect to the "page.html" page
          window.location.href = "subscription.html";
      } else {
          if (loginResult.message === "Invalid password") {
              // Invalid password, show an error message
              loginMessage.textContent = 'Invalid password. Please enter the correct password.';
          } else {
              // Other login failure, show a general error message
              loginMessage.textContent = 'Login failed. Please check your credentials.';
          }
      }
  })
    })
    .catch((error) => {
      console.error("Verification Error:", error);
      verificationMessage.textContent =
        "An error occurred during verification.";
    });
  });
  
  // Add an event listener for the "Resend OTP" button
  resendOTPButton.addEventListener("click", function (e) {
    e.preventDefault();
    
    // Stop and reset the previous timer
    resetTimer();
fetch(`http://localhost:5500/resend-otp?email=${email}`, {
      method: "POST",
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error("Network response was not ok");
      }
    })
    .then((resendData) => {
      if (resendData.success) {
        // OTP resent successfully
        verificationMessage.textContent =
          "OTP resent successfully. Please check your email.";
        
        // Start a new timer when OTP is resent
        startTimer(600); // 600 seconds = 10 minutes
      } else {
        // Failed to resend OTP
        verificationMessage.textContent =
          "Failed to resend OTP. Please try again later.";
      }
    })
    .catch((error) => {
      console.error("Resend OTP Error:", error);
      verificationMessage.textContent =
        "An error occurred while resending OTP.";
    });
  });
