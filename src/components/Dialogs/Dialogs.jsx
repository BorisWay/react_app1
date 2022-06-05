import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>props.name</NavLink>
    /</div>
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          <DialogItem name="Dima" id="1" />
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Dima</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Boris</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Diana</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Anton</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Ilya</NavLink>
        </div>
      </div>
      <div class={s.messages}>
        <div className={s.dialog}>Hi</div>
        <div className={s.dialog}>How r u</div>
        <div className={s.dialog}>Just chilling?</div>
        <div className={s.dialog}>Halo</div>
        <div className={s.dialog}>Ahaha</div>
      </div>
    </div>
  );
};

export default Dialogs;
