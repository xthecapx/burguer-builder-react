import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        <ToolBar isAuth={this.props.isAuthenticated} menuClicked={this.sideDrawerToggleHandler} />
        <SideDrawer isAuth={this.props.isAuthenticated} show={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
