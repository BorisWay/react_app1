import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <img src='https://picsum.photos/536/354'></img>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
