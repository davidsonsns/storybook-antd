import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Custom from './Custom';
import Textarea from './Textarea';
import NonCase from './NonCase';
import Pattern from './LookupPatterns';
import Uncertian from './Uncertain';

class AutoComplatePage extends Component {
  state = {}
  render() { 
    return (
      <Fragment>
        <h1 className="title">AutoComplate</h1>
        <p className="text">
          Autocomplete function of input field.
        </p>

        <h2 className="title">When To Use</h2>
        <p className="text">
          When there is a need for autocomplete functionality.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Custom />
        <Textarea />
        <NonCase />
        <Pattern />
        <Uncertian />

      </Fragment>
    );
  }
}
 
export default AutoComplatePage;