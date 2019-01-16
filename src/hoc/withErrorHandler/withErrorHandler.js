import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent, axios) => {
  const WithErrorHandler = class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.reqResponse = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
          return Promise.reject(error);
        }
      );
    }

    componentWillUnmount() {
      if (axios.interceptors.request) {
        axios.interceptors.request.eject(this.reqInterceptor);
      }

      if (axios.interceptors.reponse) {
        axios.interceptors.reponse.eject(this.reqResponse);
      }
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapperComponent {...this.props} />
        </>
      );
    }
  };

  return WithErrorHandler;
};

export default withErrorHandler;
