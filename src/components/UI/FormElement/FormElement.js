import React from 'react';
import classes from './FormElement.module.scss';

function FormElement(props) {
  let $formElement = null;

  switch (props.elementype) {
    case 'input':
      $formElement = <input className={classes.Input} {...props} />;
      break;
    case 'textarea':
      $formElement = <textarea className={classes.TextArea} {...props} />;
      break;
    default:
      $formElement = <input className={classes.Input} {...props} />;
  }

  return (
    <div className={classes.FormElement}>
      <label className={classes.Label}>{props.label}</label>
      {$formElement}
    </div>
  );
}

export default FormElement;
