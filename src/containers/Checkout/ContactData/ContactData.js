import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.scss';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const body = {
      ingredients: { ...this.props.ingredients },
      price: this.props.totalPrice,
      customer: {
        name: 'Cristian',
        address: {
          street: 'Stret 1',
          zipCode: '123',
          country: 'Colombia'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };

    axios
      .post('/orders.json', body)
      .then(response => {
        console.log('[ContactData]', response);
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        console.log('[ContactData]', error);
        this.setState({ loading: false });
      });
  };

  render() {
    let $form = (
      <form>
        <input className={classes.Input} type='text' name='name' placeholder='Your email' />
        <input className={classes.Input} type='email' name='email' placeholder='Your email' />
        <input className={classes.Input} type='text' name='street' placeholder='Street' />
        <input className={classes.Input} type='text' name='postalCode' placeholder='Postal code' />
        <Button btnType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      $form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {$form}
      </div>
    );
  }
}

export default ContactData;
