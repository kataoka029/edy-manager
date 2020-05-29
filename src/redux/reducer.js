const initialState = {
  messages: [],
  input: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MESSAGES":
      return { ...state, messages: action.messages };
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.message] };
    case "HANDLE_INPUT":
      return { ...state, input: action.input };
    default:
      return state;
  }
};

export default reducer;
