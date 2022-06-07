import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
  // let dialogs = [
  //   { id: 1, name: "Dima" },
  //   { id: 2, name: "Boris" },
  //   { id: 3, name: "Diana" },
  //   { id: 4, name: "Anton" },
  //   { id: 5, name: "Ilya" },
  //   { id: 6, name: "Dasha" },
  // ];

  // let messages = [
  //   { id: 1, message: "Hi" },
  //   { id: 2, message: "How r u?" },
  //   { id: 3, message: "Just chilling?" },
  //   { id: 4, message: "Halo" },
  //   { id: 5, message: "Ahaha" },
  //   { id: 6, message: "Lol" },
  // ];

  let dialogsElement = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      {props.num}
      <div className={s.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
