import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Changer from './Changer';
import Jumper from './Jumper';
import Mini from './Mini';
import Simple from './Simple';
import Controlled from './Controlled';
import Total from './Total';
import Text from './Text';

class PaginationPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Pagination</h1>

        <p className="text">
          A long list can be divided into several pages by Pagination, and only one page will be loaded at a time.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>When it will take a long time to load/render all items.</li>
          <li>If you want to browse the data by navigating through pages.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Changer />
        <Jumper />
        <Mini />
        <Simple />
        <Controlled />
        <Total />
        <Text />

      </Fragment>
    );
  }
}
 
export default PaginationPage;