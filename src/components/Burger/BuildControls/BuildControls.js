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
    return <BuildControl key={control.label} label={control.label} />;
  });

  return <div className={classes.BuildControls}>{controlsEments}</div>;
}

export default BuildControls;
