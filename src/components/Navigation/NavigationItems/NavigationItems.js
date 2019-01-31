import React from 'react';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

function NavigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>
        Burguer Builder
      </NavigationItem>
      <NavigationItem link='/orders'>Orders</NavigationItem>
      {props.isAuthenticated ? (
        <NavigationItem link='/logout'>Logout</NavigationItem>
      ) : (
        <NavigationItem link='/auth'>Authenticate</NavigationItem>
      )}
    </ul>
  );
}

export default NavigationItems;
