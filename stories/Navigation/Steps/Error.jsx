import React, { Component } from 'react';
import { Steps } from 'antd';

class Error extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Error Status</h3>

        <Steps current={1} status="error">
          <Step title="Finished" description="This is a description" />
          <Step title="In Process" description="This is a description" />
          <Step title="Waiting" description="This is a description" />
        </Steps>
      </section>
    );
  }
}
 
export default Error;