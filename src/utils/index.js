import config from "../config";
const url = config.url;

export const fetchLatestMessages = (dispatch) => {
  fetch(`${url}api/messages/latest`)
    .then((res) => res.json())
    .then((data) => {
      const unreadCounts = {};
      data.forEach((e) => (unreadCounts[e.lineUserId] = e.unreadCount));
      dispatch({ type: "SET_UNREADCOUNTS", unreadCounts });
      return data;
    })
    .then((data) => {
      dispatch({
        type: "SET_USERS",
        users: data,
      });
    })
    .then(() => console.log("SUCCESS - fetchLatestMessages()"))
    .catch((err) => console.log("ERROR - fetchLatestMessages() - ", err));
};

export const fetchUserMessages = async (dispatch, lineUserId) => {
  if (!lineUserId) return [];
  await fetch(`${url}api/users/${lineUserId}/messages`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "SET_MESSAGES",
        messages: data,
      });
    })
    .then(() => {
      const messageElems = document.querySelectorAll("div.message");
      const lastElem = messageElems[messageElems.length - 1];
      if (!lastElem) return;
      lastElem.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    })
    .then(() => console.log("SUCCESS - fetchUserMessages()"))
    .catch((err) => console.log("ERROR - fetchUserMessages() - ", err));
};

export const readMessages = (lineUserId) => {
  return fetch(`${url}api/users/${lineUserId}/messages/read`, {
    method: "PATCH",
  })
    .then(() => console.log("SUCCESS - readMessages()"))
    .catch((err) => console.log("ERROR - readMessages() - ", err));
};

export const updateContents = () => {
  return fetch(`${url}api/messages`, {
    method: "PATCH",
  })
    .then(() => console.log("SUCCESS - updateContents()"))
    .catch((err) => console.log("ERROR - updateContents() - ", err));
};

export const createPushMessage = (input, lineUserId) => {
  const events = [];
  events[0] = {
    type: "message",
    replyToken: "_",
    source: {
      userId: lineUserId,
      type: "edy",
    },
    message: {
      id: "_",
      type: "text",
      text: input,
    },
  };
  return events;
};

export const insertMessage = async (events) => {
  await fetch(`${url}api/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(events),
  })
    .then(() => console.log("SUCCESS - insertMessage()"))
    .catch((err) => console.log("ERROR - insertMessage() - ", err));
};

export const sendMessage = (events, lineUserId) => {
  fetch(`${url}api/users/${lineUserId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(events),
  })
    .then(() => console.log("SUCCESS - sendMessage()"))
    .catch((err) => console.log("ERROR - sendMessage() - ", err));
};
