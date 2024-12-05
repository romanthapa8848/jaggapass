// Initialize EmailJS with your public key
emailjs.init("LWvbe3CIOiWUXD8SC");

document.getElementById("buy-sell-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get form data
  const userName = document.getElementById("user-name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const landLocation = document.getElementById("land-location").value;
  const landPrice = document.getElementById("land-price").value;
  const transactionType = document.getElementById("transaction-type").value;

  // Send the email using EmailJS
  emailjs
    .send("service_v93ddzs", "template_3la3gv8", {
      "user-name": userName,
      "phone-number": phoneNumber,
      "land-location": landLocation,
      "land-price": landPrice,
      "transaction-type": transactionType,
    })
    .then(
      function (response) {
        console.log("Success:", response);
        document.getElementById("status-message").textContent =
          "Message sent successfully! We'll get back to you soon.";
        document.getElementById("status-message").style.color = "green";
        document.getElementById("buy-sell-form").reset(); // Reset form fields after submission
      },
      function (error) {
        console.error("Error:", error);
        document.getElementById("status-message").textContent =
          "Oops! Something went wrong. Please try again later.";
        document.getElementById("status-message").style.color = "red";
      }
    );
});
