import React from 'react';
import classes from './Layout.module.scss';
import ToolBar from '../Navigation/ToolBar/ToolBar';

function Layout(props) {
  return (
    <>
      <ToolBar />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
}

export default Layout;
