import React, { Component, Fragment } from 'react';
import Basic from './Basic';
import Mini from './Mini';
import Icon from './Icon';
import Switch from './Switch';
import Vertical from './Vertical';
import VerticalMini from './VericalMini';
import Error from './Error';
import Dot from './Dot';
import Custom from './Custom';

class StepsPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Steps</h1>
        <p className="text">
          Steps is a navigation bar that guides users through the steps of a task.
        </p>

        <h2 className="title">When To Use</h2>
        <p className="text">
          When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.
        </p>

        <h2 className="title">Example:</h2>

        <Basic/>
        <Mini/>
        <Icon />
        <Switch />
        <Vertical />
        <VerticalMini />
        <Error />
        <Dot />
        <Custom />
      </Fragment>
    );
  }
}
 
export default StepsPage;