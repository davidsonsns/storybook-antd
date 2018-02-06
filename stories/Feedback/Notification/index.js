import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Never from './NeverClose';
import Icon from './Icon';
import CustomClose from './CustomClose';
import CustomIcon from './CustomIcon';
import Placement from './Placement';
import CustomStyle from './CustomStyle';

class MessagePage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Notification</h1>

        <p className="text">
          Display a notification message globally.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          To display a notification message at any of
          the four corners of the viewport.
          Typically it can be used in the following cases:
        </p>

        <ul>
          <li>A notification with complex content.</li>
          <li>AA notification providing a feedback based on the user interaction. Or it may show some details about upcoming steps the user may have to follow.</li>
          <li>A notification that is pushed by the application.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Never />
        <Icon />
        <CustomClose />
        <CustomIcon />
        <Placement />
        <CustomStyle />

      </Fragment>
    );
  }
}
 
export default MessagePage;