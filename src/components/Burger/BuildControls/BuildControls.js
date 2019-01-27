import React from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

export const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

function BuildControls(props) {
  const controlsEments = controls.map(control => {
    return (
      <BuildControl
        key={control.label}
        label={control.label}
        more={() => props.ingredientAdded(control.type)}
        less={() => {
          props.ingredientRemove(control.type);
        }}
        disabledLessButton={props.ingredients[control.type] === 0}
      />
    );
  });

  return (
    <div className={classes.BuildControls}>
      <p>
        Total Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controlsEments}
      <button className={classes.OrderButton} disabled={props.price <= 4} onClick={props.purchasing}>
        ORDER NOW
      </button>
    </div>
  );
}

export default BuildControls;
