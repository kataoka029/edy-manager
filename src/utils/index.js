import config from "../config";
const url = config.url;

export const fetchUsers = (dispatch) => {
  fetch(`${url}api/users/`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "SET_USERS",
        users: data,
      });
    })
    .then(() => console.log("Users was fetched."));
};

export const fetchMessages = (dispatch, lineUserId) => {
  fetch(`${url}api/messages/${lineUserId}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "SET_MESSAGES",
        messages: data,
      });
    })
    .then(() => console.log("Messages was fetched."))
    .catch((err) => console.log(err));
};

export const insertMessage = async (events) => {
  await fetch(`${url}api/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(events),
  })
    .then(() => console.log("Message was inserted."))
    .catch((err) => console.log(err));
};

// edyInputからLINEに
export const sendMessage = (events, lineUserId) => {
  fetch(`${url}api/messages/${lineUserId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(events),
  })
    .then(() => console.log("Messages was sent."))
    .catch((err) => console.log("ERROR in sendMessage(): ", err));
};
