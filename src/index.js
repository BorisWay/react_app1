import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from "./redux/store";
import App from './App';
import store from "./redux/redux-store";
import React from 'react';
import { BrowserRouter } from "react-router-dom";

const root  = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
    root.render(
    <React.StrictMode>
      <App
        state={state} dispatch={store.dispatch.bind(store)} store={store}//биндим на стор чтобы от пропсов не шёл вызов
      />
    </React.StrictMode>
    
  );
}

rerenderEntireTree(store.getState());

//subscribe(state);

// store.subscribe(rerenderEntireTree);

store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
