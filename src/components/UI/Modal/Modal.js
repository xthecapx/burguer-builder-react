import React from 'react';
import classes from './Modal.module.scss';

function Modal(props) {
  return <div className={classes.Modal}>{props.children}</div>;
}

export default Modal;
