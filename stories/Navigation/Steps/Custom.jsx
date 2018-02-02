import React, { Component } from 'react';
import { Steps, Popover } from 'antd';

class Custom extends Component {
  render() {
    const Step = Steps.Step;

    const customDot = (dot, { status, index }) => (
      <Popover content={<span>step {index} status: {status}</span>}>
        {dot}
      </Popover>
    );

    return (
      <section className="example">
        <h3 className="ex-title">Customized Dot Style</h3>

        <Steps current={1} progressDot={customDot}>
          <Step title="Finished" description="You can hover on the dot." />
          <Step title="In Progress" description="You can hover on the dot." />
          <Step title="Waiting" description="You can hover on the dot." />
          <Step title="Waiting" description="You can hover on the dot." />
        </Steps>
      </section>
    );
  }
}
 
export default Custom;