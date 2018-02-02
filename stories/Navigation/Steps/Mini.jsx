import React, { Component } from 'react';
import { Steps } from 'antd';

class Mini extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Mini version</h3>
          <Steps size="small" current={1}>
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
          </Steps>
      </section>
    );
  }
}
 
export default Mini;