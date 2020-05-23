const leftContainer = document.querySelector("div.left-container");
const centerContainer = document.querySelector("div.center-container");
const rightContainer = document.querySelector("div.right-container");

fetch("https://84b52281.ngrok.io/api/messages")
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
      centerContainer.appendChild(div);
    }
  });
