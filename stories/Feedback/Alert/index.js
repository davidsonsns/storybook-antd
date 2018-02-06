import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Types from './Types';
import Closeble from './Closeble';
import Description from './Description';
import Icon from './Icon';
import Custom from './Custom';
import Banner from './Banner';

class AlertPage extends Component {
  state = {}
  render() { 
    return (
      <Fragment>
        <h1 className="title">Alert</h1>

        <p className="text">
          Alert component for feedback.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>When you need to show alert messages to users.</li>
          <li>
            When you need a persistent static container which is closable by user actions.
          </li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Types />
        <Closeble />
        <Description />
        <Icon />
        <Custom />
        <Banner />

      </Fragment>
    );
  }
}
 
export default AlertPage;