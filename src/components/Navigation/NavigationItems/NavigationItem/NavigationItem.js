import React from 'react';
import classes from './NavigationItem.module.scss';

function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.Active : null}>
        {props.children}
      </a>
    </li>
  );
}

export default NavigationItem;
