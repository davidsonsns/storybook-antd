import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Size from './Size';
import Inside from './Inside';
import EmbeddedMode from './EmbeddedMode';
import Description from './Description';
import Delay from './Delay';
import CustomIndicator from './CustomIndicator';

class SpinPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Spin</h1>

        <p className="text">
          A spinner for displaying loading state of a page or a section.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          When part of the page is waiting for
          asynchronous data or during a rendering process,
          an appropriate loading animation can effectively
          alleviate users' inquietude.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Size />
        <Inside />
        <EmbeddedMode />
        <Description />
        <Delay />
        <CustomIndicator />

      </Fragment>
    );
  }
}
 
export default SpinPage;