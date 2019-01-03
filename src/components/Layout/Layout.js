import React from 'react';
import classes from './Layout.module.scss';

function Layout(props) {
  return (
    <>
      <div>Toolbar, SideDrawer, Backgrop</div>
      <main className={classes.Content}>{props.children}</main>
    </>
  );
}

export default Layout;
