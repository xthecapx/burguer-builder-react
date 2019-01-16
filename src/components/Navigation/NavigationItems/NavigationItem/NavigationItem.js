import React from 'react';
import classes from './NavigationItem.module.scss';
import { NavLink } from 'react-router-dom';

function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.link} activeClassName={classes.Active} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
