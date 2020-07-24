import { createStore } from "redux";

const initialState = {
  input: "",
  users: [],
  messages: [],
  query: "",
  selectedLineUserId: "",
  toCheckFlg: false,
  unreadCounts: {},
  user: {},
  userFlg: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.message] };
    case "SET_INPUT":
      return { ...state, input: action.input };
    case "SET_LINEUSERID":
      return { ...state, selectedLineUserId: action.selectedLineUserId };
    case "SET_MESSAGES":
      return { ...state, messages: action.messages };
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
