document
  .getElementById("trackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const trackingNumber = document.getElementById("trackingNumber").value;

    // retrieve data from localStorage
    const trackingData = JSON.parse(localStorage.getItem("trackingData")) || {};

    const statusMessage = document.getElementById("statusMessage");

    // display status message
    if (trackingData[trackingNumber]) {
      statusMessage.textContent = trackingData[trackingNumber];
      statusMessage.style.color = "#4CAF50";
    } else {
      statusMessage.textContent =
        "Tracking number not found. Please check and try again.";
      statusMessage.style.color = "#f44336";
    }
  });
