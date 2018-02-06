import React, { Component, Fragment } from 'react';

import ProgressBar from './PregressBar';
import CircularProgressBar from './CircularProgressBar';
import MiniTab from './MiniTab';
import MiniCircular from './MiniCircular';
import DynamicCircular from './DynamicCircular';
import Dynamic from './Dynamic';
import TextFormat from './TextFormat';
import Dashboard from './Dashboard';
import Segment from './Segment';

class MessagePage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Progress</h1>

        <p className="text">
          Display the current progress of an operation flow.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          If it will take a long time to complete an operation,
          you can use Progress to show the current progress and status.
        </p>

        <ul>
          <li>When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.</li>
          <li>When you need to display the completion percentage of an operation.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <ProgressBar />
        <CircularProgressBar />
        <MiniTab />
        <MiniCircular />
        <DynamicCircular />
        <Dynamic />
        <TextFormat />
        <Dashboard />
        <Segment />

      </Fragment>
    );
  }
}
 
export default MessagePage;