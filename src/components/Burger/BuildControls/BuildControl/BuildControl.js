import React, { Component } from 'react';
import classes from './BuildControl.module.scss';
import PropTypes from 'prop-types';

class BuildControl extends Component {
  render() {
    return (
      <div className={classes.BuildControl}>
        <div className={classes.Label}>{this.props.label}</div>
        <button className={classes.Less} onClick={this.props.less} disabled={this.props.disabledLessButton}>
          Less
        </button>
        <button className={classes.More} onClick={this.props.more}>
          More
        </button>
      </div>
    );
  }
}

BuildControl.propTypes = {
  label: PropTypes.string,
  less: PropTypes.func,
  disabledLessButton: PropTypes.bool,
  more: PropTypes.func
};

export default BuildControl;
