import React from 'react';
import classes from './ToolBar.module.scss';
import Logo from '../../Logo/Logo';

function ToolBar(props) {
  return (
    <header className={classes.ToolBar}>
      <div>Menu</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
}

export default ToolBar;
