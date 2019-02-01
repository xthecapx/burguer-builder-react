import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import { tryAuthSignup } from './store/actions';

class App extends Component {
  constructor(props) {
    super(props);
    props.onTryAutoSignup();
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/auth' component={Auth} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(tryAuthSignup())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
