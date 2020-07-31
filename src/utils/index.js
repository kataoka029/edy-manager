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

export const fetchMessagesByUser = async (dispatch, lineUserId) => {
  if (!lineUserId) return [];
  await fetch(`${url}api/users/${lineUserId}/messages`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "SET_MESSAGES_BYUSER",
        messagesByUser: data,
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
    .then(() => console.log("SUCCESS - fetchMessagesByUser()"))
    .catch((err) => console.log("ERROR - fetchMessagesByUser() - ", err));
};

export const fetchOrdersByUser = async (dispatch, lineUserId) => {
  if (!lineUserId) return [];
  await fetch(`${url}api/users/${lineUserId}/orders`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "SET_ORDERS_BYUSER",
        ordersByUser: data,
      });
    })
    .then(() => console.log("SUCCESS - fetchOrdersByUser()"))
    .catch((err) => console.log("ERROR - fetchOrdersByUser() - ", err));
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

export const readMessagesByUser = (lineUserId) => {
  return fetch(`${url}api/users/${lineUserId}/messages/read`, {
    method: "PATCH",
  })
    .then(() => console.log("SUCCESS - readMessagesByUser()"))
    .catch((err) => console.log("ERROR - readMessagesByUser() - ", err));
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

export const toggleToCheckByUser = (lineUserId, toCheck) => {
  return fetch(`${url}api/users/${lineUserId}/check`, {
    method: "PATCH",
    body: JSON.stringify({ toCheck }),
  })
    .then(() => console.log("SUCCESS - toggleToCheckByUser()"))
    .catch((err) => console.log("ERROR - toggleToCheckByUser() - ", err));
};

export const updateImageUrls = () => {
  return fetch(`${url}api/messages/url`, {
    method: "PATCH",
  })
    .then(() => console.log("SUCCESS - updateImageUrls()"))
    .catch((err) => console.log("ERROR - updateImageUrls()", err));
};
