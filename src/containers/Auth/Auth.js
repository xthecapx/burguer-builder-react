import React, { Component } from 'react';
import classes from './Auth.module.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import FormElement from '../../components/UI/FormElement/FormElement';
import Button from '../../components/UI/Button/Button';
import { login, setAuthRedirectPath } from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import { checkValidity } from '../../shared/utility';

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

  componentDidMount() {
    if (!this.props.buldingBurger && this.props.authRedirectPath !== '/') {
      this.props.onSetAuthRedirectPath();
    }
  }

  valueChangesHandler = (event, key) => {
    const newValue = event.target.value;

    this.setState(prevStatus => {
      const controls = prevStatus.controls.map(formElement => {
        if (formElement.key === key) {
          formElement.value = newValue;
          formElement.valid = checkValidity(newValue, formElement.validation);
        }
        return formElement;
      });

      const formIsValid = prevStatus.controls.every(formElement => formElement.valid || !formElement.validation);

      return { ...controls, formIsValid };
    });
  };

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
    let $formElements = this.state.controls.map((formElement, index) => {
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

    if (this.props.loading) {
      $formElements = <Spinner />;
    }

    let $errorMessage = null;

    if (this.props.error) {
      $errorMessage = <p>{this.props.error.message}</p>;
    }

    let $form = (
      <form onSubmit={this.onSubmitHandler}>
        {$formElements}
        <Button btnType='Success' disabled={!this.state.formIsValid}>
          SUBMIT
        </Button>
      </form>
    );

    let $authRedirect = null;
    if (this.props.isAuthenticated) {
      $authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <div className={classes.Auth}>
        {$authRedirect}
        <h1>{this.state.isSignup ? 'SIGN IN' : 'SIGN UP'}</h1>
        {$errorMessage}
        {$form}
        <Button btnType='Danger' clicked={this.switchAuthModeHandler}>
          SWITCH TO {this.state.isSignup ? 'SIGN UP' : 'SIGN IN'}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    buldingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password, isSignup) => dispatch(login(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(setAuthRedirectPath('/'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
