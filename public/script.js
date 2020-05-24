const leftContainer = document.querySelector("div.left-container");
const messagesContainer = document.querySelector("div.messages-container");
const rightContainer = document.querySelector("div.right-container");
const url = "https://8a6e2f12.ngrok.io";

fetch(`${url}/api/messages`)
  .then((res) => res.json())
  .then((messages) => {
    for (const message of messages) {
      const div = document.createElement("div");
      div.classList.add("chat");
      if (message.line_user_type === "user") {
        div.classList.add("left-chat");
      } else {
        div.classList.add("right-chat");
      }
      div.innerHTML = message.line_message_text;
      messagesContainer.appendChild(div);
    }
  });
