import React, { Component } from 'react';
import { Steps } from 'antd';

class Basic extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Basic steps</h3>
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </section>
    );
  }
}
 
export default Basic;