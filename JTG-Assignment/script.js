document.addEventListener("DOMContentLoaded", () => {
    const subscribeButton = document.querySelector(".newsletter button");

    subscribeButton.addEventListener("click", () => {
      const emailInput = document.querySelector(".newsletter input");
      const email = emailInput.value.trim();

      if (email === "") {
        alert("Please enter your email address.");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
      } else {
        alert(`Thank you for subscribing, ${email}!`);
        emailInput.value = "";
      }
    });
  });