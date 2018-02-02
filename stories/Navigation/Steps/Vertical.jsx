import React, { Component } from 'react';
import { Steps } from 'antd';

class Vertical extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Vertical Steps</h3>

        <Steps direction="vertical" current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </section>
    );
  }
}
 
export default Vertical;