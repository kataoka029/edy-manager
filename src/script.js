const messagesContainer = document.querySelector("div.messages-container");
const edyInputText = document.querySelector("div.edy-input div.text");
const replyButton = document.querySelector("a.reply");
const url = "https://c8bce5b3.ngrok.io/";

// あるユーザーIDのメッセージを取得する
fetch(`${url}/api/messages?u=1`)
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

// DBには入るけど、LINEには送れていない
replyButton.addEventListener("click", () => {
  const replyEvents = [];
  replyEvents[0] = {
    type: "message",
    replyToken: "_",
    source: {
      userId: "_",
      type: "edy",
    },
    message: {
      id: "_",
      type: "text",
      text: edyInputText.innerText,
    },
  };
  fetch(`${url}/api/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(replyEvents),
  });
  location.reload();
});
