import React from 'react';
import classes from './ToolBar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

function ToolBar(props) {
  return (
    <header className={classes.ToolBar}>
      <div>Menu</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default ToolBar;
