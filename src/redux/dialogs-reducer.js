const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  newMessageBody: '',
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How r u?" },
    { id: 3, message: "Just chilling?" },
    { id: 4, message: "Halo" },
    { id: 5, message: "Ahaha" },
    { id: 6, message: "Lol" },
  ],
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Boris" },
    { id: 3, name: "Diana" },
    { id: 4, name: "Anton" },
    { id: 5, name: "Ilya" },
    { id: 6, name: "Dasha" },
  ],
  
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
