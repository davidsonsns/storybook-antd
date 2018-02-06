import React, { Component, Fragment } from 'react';
import './style.css';

import SimpleList from './SimpleList';
import Basic from './Basic';
import LoadMore from './LoadMore';
import Vertical from './Vertical';
import Grid from './Grid';
import Response from './Response';
import ScrollLoad from './ScrollLoad';

class ListPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">List</h1>

        <p className="text">
          Simple List.
        </p>

        <h2 className="title">When to use</h2>

        <p className="text">
          A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.
        </p>

        <h2 className="title">Examples:</h2>

        <SimpleList />
        <Basic />
        <LoadMore />
        <Vertical />
        <Grid />
        <Response />
        <ScrollLoad />

      </Fragment>
    );
  }
}
 
export default ListPage;