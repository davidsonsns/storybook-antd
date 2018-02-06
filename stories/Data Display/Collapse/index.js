import React, { Component, Fragment } from 'react';

import Collapse from './Collapse';
import Accordion from './Accordion';
import Nested from './Nested';
import Borderless from './Borderless';
import Custom from './Custom';
import NoArrow from './NoArrow';

class CollapsePage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Collapse</h1>
        <p className="text">
          A content area which can be collapsed and expanded.
        </p>

        <h2 className="title">When to use</h2>

        <ul>
          <li>Can be used to group or hide complex regions to keep the page clean.</li>
          <li>Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Collapse />
        <Accordion />
        <Nested />
        <Borderless />
        <Custom />
        <NoArrow />

      </Fragment>
    );
  }
}
 
export default CollapsePage;