document.addEventListener("DOMContentLoaded", function () {
  const chat = document.getElementById("chat");
  const messageInput = document.getElementById("messageInput");
  const sendButton = document.getElementById("sendButton");

  sendButton.addEventListener("click", sendMessage);

  function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === "") return;

    const user = Math.random() < 0.5 ? "User 1" : "User 2";
    const message = createMessage(user, messageText);
    chat.innerHTML += message;

    // Scroll to the bottom of the chat
    chat.scrollTop = chat.scrollHeight;

    // Clear the input field
    messageInput.value = "";
  }

  function createMessage(user, text) {
    return `
      <div class="message">
        <span class="user">${user}:</span>
        <span class="text">${text}</span>
      </div>`;
  }
});
