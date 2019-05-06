import React from 'react';
import c from './Dialog.module.css';

const Dialog = ( {img_src, interlocutor}) => {
  return (
    <div className={c.dialog}>
      <img className={c.interlocutor_photo} src={img_src} alt="photo"/>
      <span className={c.interlocutor_name}>{interlocutor}</span>
    </div>
  )
}

export default Dialog;