import React, { Component, Fragment } from 'react';
import './style.css';

import Basic from './Basic';
import Async from './Async';
import CustomizedFooter from './CustomizedFooter';
import Confirm from './Confirm';
import Info from './Info';
import Internationalization from './Internationalization';
import Destroy from './Destroy';
import Position from './Position';

class ModalPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Modal</h1>

        <p className="text">
          Modal dialogs.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          When requiring users to interact with the application,
          but without jumping to a new page and interrupting the
          user's workflow, you can use Modal to create a new
          floating layer over the current page to get user
          feedback or display information. Additionally, if you
          need show a simple confirmation dialog, you can use
          antd. Modal.confirm(), and so on.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Async />
        <CustomizedFooter />
        <Confirm />
        <Info />
        <Internationalization />
        <Destroy />
        <Position />

      </Fragment>
    );
  }
}
 
export default ModalPage;