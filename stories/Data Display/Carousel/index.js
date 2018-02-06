import React, { Component, Fragment } from 'react';
import './style.css';

import Basic from './Basic';
import Vertical from './Vertical';
import FadeIn from './FadeIn';
import Auto from './Auto';

class Carousel extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Carousel</h1>
        <p className="text">
          A carousel component. Scales with its container.
        </p>

        <h2 className="title">When to use</h2>

        <ul>
          <li>When there is a group of content on the same level.</li>
          <li>When there is insufficient content space, it can be used to save space in the form of a revolving door.</li>
          <li>Commonly used for a group of pictures/cards.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Vertical />
        <FadeIn />
        <Auto />

      </Fragment>
    );
  }
}
 
export default Carousel;