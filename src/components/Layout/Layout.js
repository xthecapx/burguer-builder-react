import React from 'react';
import classes from './Layout.module.scss';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

function Layout(props) {
  return (
    <>
      <ToolBar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
}

export default Layout;
