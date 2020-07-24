import config from "../config";

const url = config.url;

export const createPushMessages = (input, lineUserId) => {
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

export const fetchMessages = async (dispatch, lineUserId) => {
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
    .then(() => console.log("SUCCESS - fetchMessages()"))
    .catch((err) => console.log("ERROR - fetchMessages() - ", err));
};

export const fetchUser = (dispatch, lineUserId) => {
  fetch(`${url}api/users/${lineUserId}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "SET_USER",
        user: data,
      });
    })
    .then(() => console.log("SUCCESS - fetchUser()"))
    .catch((err) => console.log("ERROR - fetchUser() - ", err));
};

export const fetchUsers = (dispatch) => {
  fetch(`${url}api/users`)
    .then((res) => res.json())
    .then((data) => {
      const unreadCounts = {};
      data.forEach((e) => (unreadCounts[e.line_user_id] = e.unread_count));
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

export const insertMessages = async (events) => {
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

export const readMessages = (lineUserId) => {
  return fetch(`${url}api/users/${lineUserId}/messages/read`, {
    method: "PATCH",
  })
    .then(() => console.log("SUCCESS - readMessages()"))
    .catch((err) => console.log("ERROR - readMessages() - ", err));
};

export const sendMessages = (events, lineUserId) => {
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

export const toggleToCheck = (lineUserId, toCheck) => {
  return fetch(`${url}api/users/${lineUserId}/check`, {
    method: "PATCH",
    body: JSON.stringify({ toCheck }),
  })
    .then(() => console.log("SUCCESS - toggleToCheck()"))
    .catch((err) => console.log("ERROR - toggleToCheck() - ", err));
};

export const updateImageUrls = () => {
  return fetch(`${url}api/messages/url`, {
    method: "PATCH",
  })
    .then(() => console.log("SUCCESS - updateImageUrls()"))
    .catch((err) => console.log("ERROR - updateImageUrls()", err));
};
