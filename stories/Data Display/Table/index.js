import React, { Component, Fragment } from 'react';
import './style.css';

import Basic from './Basic';
import Select from './Select';

class TablePage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Table</h1>

        <p className="text">
          A table displays rows of data.
        </p>

        <h2 className="title">When to use</h2>

        <ul>
          <li>To display a collection of structured data.</li>
          <li>To sort, search, paginate, filter data.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Select />

      </Fragment>
    );
  }
}
 
export default TablePage;