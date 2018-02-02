import React, { Component } from 'react';
import { Steps, Icon } from 'antd';

class StepIcon extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Steps With Icon</h3>
        <Steps>
          <Step status="finish" title="Login" icon={<Icon type="user" />} />
          <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
          <Step status="process" title="Pay" icon={<Icon type="loading" />} />
          <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
        </Steps>
      </section>
    );
  }
}
 
export default StepIcon;