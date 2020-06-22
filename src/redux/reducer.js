const initialState = {
  messages: [],
  input: "",
  users: [],
  selectedLineUserId: "",
  unreadCounts: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MESSAGES":
      return { ...state, messages: action.messages };
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.message] };
    case "SET_USERS":
      return { ...state, users: action.users };
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

export default reducer;
