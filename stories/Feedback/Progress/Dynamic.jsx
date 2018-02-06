import React, { Component } from 'react';
import { Progress, Button } from 'antd';

const ButtonGroup = Button.Group;

class Dynamic extends Component {
  state = {
    percent: 0,
  };

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Dynamic</h3>

        <Progress className="mb20" percent={this.state.percent} />
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </section>
    );
  }

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }
  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }
}
 
export default Dynamic;