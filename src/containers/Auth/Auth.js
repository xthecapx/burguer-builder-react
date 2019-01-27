import React, { Component } from 'react';
import classes from './Auth.module.scss';
import { connect } from 'react-redux';
import axios from '../../axios-auth';

import FormElement from '../../components/UI/FormElement/FormElement';
import Button from '../../components/UI/Button/Button';
import { login } from '../../store/actions';

class Auth extends Component {
  state = {
    controls: [
      {
        key: 'email',
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Mail Address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      {
        key: 'password',
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    ],
    formIsValid: false,
    isSignup: true
  };

  valueChangesHandler = (event, key) => {
    const newValue = event.target.value;

    this.setState(prevStatus => {
      const controls = prevStatus.controls.map(formElement => {
        if (formElement.key === key) {
          formElement.value = newValue;
          formElement.valid = this.checkValidity(newValue, formElement.validation);
        }
        return formElement;
      });

      const formIsValid = prevStatus.controls.every(formElement => formElement.valid || !formElement.validation);

      return { ...controls, formIsValid };
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
      const controls = prevStatus.controls.map(formElement => {
        if (formElement.key === key) {
          formElement.touched = true;
        }
        return formElement;
      });

      return { ...controls };
    });
  }

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.onLogin(this.state.controls[0].value, this.state.controls[1].value, this.state.isSignup);
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        isSignup: !prevState.isSignup
      };
    });
  };

  render() {
    const $formElements = this.state.controls.map((formElement, index) => {
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
      <form onSubmit={this.onSubmitHandler}>
        {$formElements}
        <Button btnType='Success' disabled={!this.state.formIsValid}>
          SUBMIT
        </Button>
      </form>
    );

    return (
      <div className={classes.Auth}>
        <h1>{this.state.isSignup ? 'SIGN UP' : 'SIGN IN'}</h1>
        {$form}
        <Button btnType='Danger' clicked={this.switchAuthModeHandler}>
          SWITCH TO {this.state.isSignup ? 'SIGN IN' : 'SIGN UP'}
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password, isSignup) => dispatch(login(email, password, isSignup))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Auth);
