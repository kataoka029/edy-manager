import { createStore } from "redux";

const initialState = {
  lineUserId: "",
  messageToPush: "",
  messagesByUser: [],
  ordersByUser: [],
  query: "",
  toCheckFlg: false,
  unreadCounts: {},
  user: {},
  userFlg: false,
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LINEUSERID":
      return { ...state, lineUserId: action.lineUserId };
    case "SET_MESSAGE_TOPUSH":
      return { ...state, messageToPush: action.messageToPush };
    case "SET_MESSAGES_BYUSER":
      return { ...state, messagesByUser: action.messagesByUser };
    case "SET_ORDERS_BYUSER":
      return { ...state, ordersByUser: action.ordersByUser };
    case "SET_QUERY":
      return { ...state, query: action.query };
    case "SET_TOCHECKFLG":
      return { ...state, toCheckFlg: action.toCheckFlg };
    case "SET_UNREADCOUNTS":
      return { ...state, unreadCounts: action.unreadCounts };
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_USERFLG":
      return { ...state, userFlg: action.userFlg };
    case "SET_USERS":
      return { ...state, users: action.users };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
