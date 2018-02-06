import React, { Component, Fragment } from 'react';

import Normal from './Normal';
import Types from './Types';
import Custom from './Custom';
import Loading from './Loading';

class MessagePage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Message</h1>

        <p className="text">
          Display global messages as feedback in response to user operations.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>To provide feedback such as success, warning, error etc.</li>
          <li>A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Normal />
        <Types />
        <Custom />
        <Loading />

      </Fragment>
    );
  }
}
 
export default MessagePage;