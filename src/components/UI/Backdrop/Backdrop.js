import React from 'react';
import classes from './Backdrop.module.scss';

function Backdrop(props) {
  return props.show ? <div className={classes.Backdrop} onClick={props.clicked} /> : null;
}

export default Backdrop;
