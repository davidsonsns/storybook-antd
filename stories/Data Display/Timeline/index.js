import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Color from './Color';
import LastNode from './LastNode';
import Custom from './Custom';

class TimelinePage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Timeline</h1>

        <p className="text">
          Vertical display timeline.
        </p>

        <h2 className="title">When to use</h2>

        <ul>
          <li>When a series of information needs to be ordered by time (ascend or descend).</li>
          <li>When you need a timeline to make a visual connection.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Color />
        <LastNode />
        <Custom />

      </Fragment>
    );
  }
}
 
export default TimelinePage;