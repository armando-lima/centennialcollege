document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chat-input");
  const submitButton = document.getElementById("submit-btn");

  submitButton.addEventListener("click", () => {
    const message = chatInput.value;
    if (message.trim() !== "") {
      fetch("/submit-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })
        .then((response) => response.json())
        .then((data) => {
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error submitting chat:", error);
        });
    }
  });
});
