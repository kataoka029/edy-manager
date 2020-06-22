import config from "../config";
const url = config.url;

export const fetchUsers = (dispatch) => {
  fetch(`${url}api/users/`)
    .then((res) => res.json())
    .then((data) => {
      const unreadCounts = {};
      data.forEach((e) => (unreadCounts[e.lineUserId] = e.unreadCount));
      // console.log("data: ", data);
      dispatch({ type: "SET_UNREADCOUNTS", unreadCounts });
      return data;
    })
    .then((data) => {
      dispatch({
        type: "SET_USERS",
        users: data,
      });
    })
    .then(() => console.log("SUCCESS - fetchUsers()"))
    .catch((err) => console.log("ERROR - fetchUsers() - ", err));
};

export const fetchMessages = async (dispatch, lineUserId) => {
  if (!lineUserId) return [];
  await fetch(`${url}api/messages/${lineUserId}`)
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
    .then(() => console.log("SUCCESS - fetchMessages()"))
    .catch((err) => console.log("ERROR - fetchMessages() - ", err));
};

export const readMessages = (lineUserId) => {
  // if (!lineUserId) return ;
  return fetch(`${url}api/messages/${lineUserId}/read`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => console.log("SUCCESS - readMessages()"))
    .catch((err) => console.log("ERROR - readMessages() - ", err));
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
  fetch(`${url}api/messages/${lineUserId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(events),
  })
    .then(() => console.log("SUCCESS - sendMessage()"))
    .catch((err) => console.log("ERROR - sendMessage() - ", err));
};
