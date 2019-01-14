import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

function SideDrawer(props) {
  let navigationClasses = [classes.SideDrawer, classes.Close];

  if (props.show) {
    navigationClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={navigationClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
}

export default SideDrawer;
