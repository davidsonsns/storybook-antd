import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import LocaleText from './LocaleText';
import Placement from './Placement';
import Trigger from './Trigger';

class PopconfirmPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Popconfirm</h1>

        <p className="text">
          A simple and compact confirmation dialog of an action.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          A simple and compact dialog used for asking for user confirmation.
        </p>

        <p className="text">
          The difference with the confirm modal dialog is that it's more lightweight than the static popped full-screen confirm modal.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <LocaleText />
        <Placement />
        <Trigger />

      </Fragment>
    );
  }
}
 
export default PopconfirmPage;