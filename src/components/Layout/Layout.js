import React, { Component } from 'react';
import classes from './Layout.module.scss';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevStatus => {
      return { showSideDrawer: !prevStatus.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <ToolBar menuClicked={this.sideDrawerToggleHandler} />
        <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
