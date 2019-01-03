import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <>
        <Burger />
        <div>Burguer Controls</div>
      </>
    );
  }
}

export default BurgerBuilder;
