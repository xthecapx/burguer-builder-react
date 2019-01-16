import React from 'react';
import classes from './FormElement.module.scss';

function FormElement(props) {
  let $formElement = null;

  switch (props.elementType) {
    case 'input':
      $formElement = <input className={classes.Input} {...props.elementConfig} value={props.value} onChange={props.valueChanges} />;
      break;
    case 'textarea':
      $formElement = <textarea className={classes.TextArea} {...props.elementConfig} value={props.value} onChange={props.valueChanges} />;
      break;
    case 'select':
      $formElement = (
        <select className={classes.Input} value={props.value} onChange={props.valueChanges}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;
    default:
      $formElement = <input className={classes.Input} {...props.elementConfig} value={props.value} onChange={props.valueChanges} />;
  }

  return (
    <div className={classes.FormElement}>
      <label className={classes.Label}>{props.label}</label>
      {$formElement}
    </div>
  );
}

export default FormElement;
