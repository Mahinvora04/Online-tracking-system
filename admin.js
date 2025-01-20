document
  .getElementById("adminForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const trackingNumber = document.getElementById("trackingNumber").value;
    const status = document.getElementById("status").value;

    if (!trackingNumber || !status) {
      alert("Please fill in both fields!");
      return;
    }

    // get existing tracking data from localStorage
    let trackingData = JSON.parse(localStorage.getItem("trackingData")) || {};

    // add new tracking data to the object
    trackingData[trackingNumber] = status;

    // save updated data back to localStorage
    localStorage.setItem("trackingData", JSON.stringify(trackingData));

    // show a success message
    const message = document.getElementById("message");
    message.textContent = "Tracking data added successfully!";
    message.style.color = "#4CAF50";

    // clear the form
    document.getElementById("trackingNumber").value = "";
    document.getElementById("status").value = "";
  });
