let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Test, how r u?", likesCount: 12 },
      { id: 2, message: "it's my 1st post", likesCount: 15 },
    ],
  },
  dialogsPage: {
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
};

export let addPost = (postMessage) => {
  let newPost = {
    id: state.profilePage.posts.length+1,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);

  export let addMessage = (postMessage)
};

export default state;
