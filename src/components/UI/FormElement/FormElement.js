import React from 'react';
import classes from './FormElement.module.scss';

function FormElement(props) {
  let $formElement = null;
  const inputClasses = [classes.Element];

  if (!props.valid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case 'input':
      $formElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChanges}
          onFocus={props.onFocused}
        />
      );
      break;
    case 'textarea':
      $formElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChanges}
          onFocus={props.onFocused}
        />
      );
      break;
    case 'select':
      $formElement = (
        <select className={inputClasses.join(' ')} value={props.value} onChange={props.valueChanges} onFocus={props.onFocused}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;
    default:
      $formElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChanges}
          onFocus={props.onFocused}
        />
      );
  }

  return (
    <div className={classes.FormElement}>
      <label className={classes.Label}>{props.label}</label>
      {$formElement}
    </div>
  );
}

export default FormElement;
