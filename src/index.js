import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id:1, message: "Test, how r u?", likesCount: 12},
  {id:2, message: "it's my 1st post", likesCount: 15}
]

let dialogs = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Boris" },
  { id: 3, name: "Diana" },
  { id: 4, name: "Anton" },
  { id: 5, name: "Ilya" },
  { id: 6, name: "Dasha" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How r u?" },
  { id: 3, message: "Just chilling?" },
  { id: 4, message: "Halo" },
  { id: 5, message: "Ahaha" },
  { id: 6, message: "Lol" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
