document
  .getElementById("trackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const trackingNumber = document.getElementById("trackingNumber").value;

    // Example of tracking numbers and corresponding statuses
    const trackingData = {
      "#123456": "Your package is in transit. Estimated delivery: 2 days.",
      "#654321": "Your package has been delivered.",
      "#789012": "Your package is out for delivery.",
    };

    const statusMessage = document.getElementById("statusMessage");

    // Display the appropriate status message
    if (trackingData[trackingNumber]) {
      statusMessage.textContent = trackingData[trackingNumber];
      statusMessage.style.color = "#4CAF50"; // Green for success
    } else {
      statusMessage.textContent =
        "Tracking number not found. Please check and try again.";
      statusMessage.style.color = "#f44336"; // Red for error
    }
  });
