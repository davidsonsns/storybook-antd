import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

class SuggestedIcons extends Component {
  render() {
    const icons = [
      "question",
      "question-circle-o",
      "question-circle",
      "plus",
      "plus-circle-o",
      "plus-circle",
      "pause",
      "pause-circle-o",
      "pause-circle",
      "minus",
      "minus-circle-o",
      "minus-circle",
      "plus-square",
      "plus-square-o",
      "minus-square",
      "minus-square-o",
      "info",
      "info-circle-o",
      "info-circle",
      "exclamation",
      "exclamation-circle-o",
      "exclamation-circle",
      "close",
      "close-circle",
      "close-circle-o",
      "close-square",
      "close-square-o",
      "check",
      "check-circle",
      "check-circle-o",
      "check-square",
      "check-square-o",
      "clock-circle-o",
      "clock-circle",
      "warning"
    ]; 
    return (
      <Fragment>
        <h3 className="title">Suggested Icons</h3>
        <section className="icons">
          {
            icons.map((icon, i) => <Icon key={i} icon={icon} />)
          }
        </section>
      </Fragment>
    );
  }
}
 
export default SuggestedIcons;