import { createStore } from "redux";

const initialState = {
  input: "",
  messages: [],
  selectedLineUserId: "",
  unreadCounts: {},
  latestMessages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MESSAGES":
      return { ...state, messages: action.messages };
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.message] };
    case "SET_LATESTMESSAGES":
      return { ...state, latestMessages: action.latestMessages };
    case "SET_LINEUSERID":
      return { ...state, selectedLineUserId: action.selectedLineUserId };
    case "HANDLE_INPUT":
      return { ...state, input: action.input };
    case "SET_UNREADCOUNTS":
      return { ...state, unreadCounts: action.unreadCounts };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
