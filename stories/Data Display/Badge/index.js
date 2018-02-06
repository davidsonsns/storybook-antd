import React, { Component, Fragment } from 'react';
import './style.css';

import Basic from './Basic';
import Standalone from './Standalone';
import Overflow from './Overflow';
import RedBadge from './RedBadge';
import Dynamic from './Dynamic';
import Status from './Status';

class BadgePage extends Component {
  state = {}
  render() { 
    return (
      <Fragment>
        <h1 className="title">Badge</h1>
        <p className="text">
          Badge
        </p>

        <h2 className="title">When to use</h2>

        <p className="text">
          Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Standalone />
        <Overflow />
        <RedBadge />
        <Dynamic />
        <Status />

      </Fragment>
    );
  }
}
 
export default BadgePage;