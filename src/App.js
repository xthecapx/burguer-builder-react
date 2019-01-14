import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/checkout' exact component={Checkout} />
          <Route path='/' component={BurgerBuilder} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
