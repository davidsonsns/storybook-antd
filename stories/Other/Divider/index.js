import React, { Component, Fragment } from 'react';

import Horizontal from './Horizontal';
import Vertical from './Vertical';

class DividerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Divider</h1>

        <p className="text">
          A divider line separates different content.
        </p>

        <h2 className="title">When to use</h2>

        <ul>
          <li>Divide sections of article.</li>
          <li>Divide inline text and links such as the operation column of table.</li>
        </ul>

        <h2 className="title">Exemples:</h2>

        <Horizontal />
        <Vertical />

      </Fragment>
    );
  }
}
 
export default DividerPage;