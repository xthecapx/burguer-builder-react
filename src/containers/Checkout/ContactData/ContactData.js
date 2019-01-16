import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.scss';

import FormElement from '../../../components/UI/FormElement/FormElement';

class ContactData extends Component {
  state = {
    orderForm: [
      {
        key: 'name',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      {
        key: 'street',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      {
        key: 'zipCode',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      {
        key: 'country',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      {
        key: 'email',
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      {
        key: 'deliveryMethod',
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value: 'fastest',
              label: 'Fastest'
            },
            {
              value: 'cheapest',
              label: 'Cheapest'
            }
          ]
        },
        value: '',
        touched: false
      }
    ],
    loading: false,
    formIsValid: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });

    const formData = this.state.orderForm.reduce((acc, formElement) => {
      acc[formElement.key] = formElement.value;

      return acc;
    }, {});

    const body = {
      ingredients: { ...this.props.ingredients },
      price: this.props.totalPrice,
      ...formData
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

  valueChangesHandler = (event, key) => {
    const newValue = event.target.value;

    this.setState(prevStatus => {
      const orderForm = prevStatus.orderForm.map(formElement => {
        if (formElement.key === key) {
          formElement.value = newValue;
          formElement.valid = this.checkValidity(newValue, formElement.validation);
          console.log(formElement);
        }
        return formElement;
      });

      const formIsValid = prevStatus.orderForm.every(formElement => formElement.valid || !formElement.validation);

      console.log(formIsValid);

      return { ...orderForm, formIsValid };
    });
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules && rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules && rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules && rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  setFocus(key) {
    this.setState(prevStatus => {
      const orderForm = prevStatus.orderForm.map(formElement => {
        if (formElement.key === key) {
          formElement.touched = true;
          console.log('touched');
        }
        return formElement;
      });

      return { ...orderForm };
    });
  }

  render() {
    const $formElements = this.state.orderForm.map((formElement, index) => {
      return (
        <FormElement
          key={index}
          elementType={formElement.elementType}
          elementConfig={formElement.elementConfig}
          valid={formElement.valid}
          shouldValidate={formElement.validation}
          value={formElement.value}
          valueChanges={event => this.valueChangesHandler(event, formElement.key)}
          onFocused={() => this.setFocus(formElement.key)}
          touched={formElement.touched}
        />
      );
    });

    let $form = (
      <form onSubmit={this.orderHandler}>
        {$formElements}
        <Button btnType='Success' disabled={!this.state.formIsValid}>
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
