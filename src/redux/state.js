import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Test, how r u?", likesCount: 12 },
        { id: 2, message: "it's my 1st post", likesCount: 15 },
      ],
      newPostText: 'bottom text'
    },
    dialogsPage: {
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
      
    },
    sidebar: {
      friendsList: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Boris" },
        { id: 3, name: "Diana" },
      ],
    },
  },

  _callSubscriber() {
    console.log('state changed');
  },

  getState(){
    return this._state;
  },

  subscribe (observer) {
    this._callSubscriber = observer; // наблюдатель
  },
  
  dispatch(action){ // должно быть свойство {type: ''}

    profileReducer(this._state.profilePage, action);

    dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}







export default store;
window.store = store;
