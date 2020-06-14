const initialState = {
  messages: [],
  input: "",
  users: [],
  userId: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MESSAGES":
      return { ...state, messages: action.messages };
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.message] };
    case "SET_USERS":
      console.log(JSON.stringify(state.users), JSON.stringify(action.users));
      return { ...state, users: action.users };
    case "SET_USERID":
      return { ...state, userId: action.userId };
    case "HANDLE_INPUT":
      return { ...state, input: action.input };
    default:
      return state;
  }
};

export default reducer;
