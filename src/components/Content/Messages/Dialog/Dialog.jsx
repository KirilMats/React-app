import React from 'react';
import c from './Dialog.module.css';
<<<<<<< HEAD

const Dialog = ( {img_src, interlocutor}) => {
  return (
    <div className={c.dialog}>
      <img className={c.interlocutor_photo} src={img_src} alt="photo"/>
      <span className={c.interlocutor_name}>{interlocutor}</span>
=======
import {NavLink} from 'react-router-dom';

const Dialog = ( {img_src, interlocutor, interlocutor_id}) => {
  return (
    <div className={c.dialog}>
      <NavLink to={'/dialogs/' + interlocutor_id} activeClassName={c.active}>
        <img className={c.interlocutor_photo} src={img_src} alt="photo"/>
        <span className={c.interlocutor_name}>{interlocutor}</span>
      </NavLink>
>>>>>>> 01ac5f3579d35c0fe0f8beab3f2bac3f5f51386d
    </div>
  )
}

export default Dialog;