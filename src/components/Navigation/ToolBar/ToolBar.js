import React from 'react';
import classes from './ToolBar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

function ToolBar(props) {
  return (
    <header className={classes.ToolBar}>
      <DrawerToggle menuClicked={props.menuClicked} />
      <Logo height='80%' />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default ToolBar;
