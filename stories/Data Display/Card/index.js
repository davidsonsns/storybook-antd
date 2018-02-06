import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import NoBorder from './NoBorder';
import SimpleCard from './Simple';
import Custom from './Custom';
import Columns from './Columns';
import Loading from './Loading';
import Grid from './Grid';
import Inner from './Inner';
import Tab from './Tab';
import Config from './Config';

class CardPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Card</h1>
        <p className="text">
          Simple rectangular container.
        </p>

        <h2 className="title">When to use</h2>

        <p className="text">
          A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <NoBorder />
        <SimpleCard />
        <Custom />
        <Columns />
        <Loading />
        <Grid />
        <Inner />
        <Tab />
        <Config />

      </Fragment>
    );
  }
}
 
export default CardPage;