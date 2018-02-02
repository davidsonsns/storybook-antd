import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';

class Switch extends Component {
  state = {
    current: 0
  }
  render() {
    const Step = Steps.Step;
    const steps = [
      {
        title: 'First',
        content: 'First-content',
      },
      {
        title: 'Second',
        content: 'Second-content',
      },
      {
        title: 'Last',
        content: 'Last-content',
      }
    ];
    const { current } = this.state;
    const style = {
      margin: '20px',
      height: '200px',
      textAlign: 'center',
      fontSize: '40px',
      lineHeight: '200px',
      background: '#eee',
      color: '#666'
    };

    return (
      <section className="example">
        <h3 className="ex-title">Switch Step</h3>
        
        <div>
          <Steps current={current}>
            {steps.map(item => <Step key={item.title} title={item.title} />)}
          </Steps>

          <div className="steps-content" style={style}>{steps[this.state.current].content}</div>

          <div className="steps-action">
            {
              this.state.current < steps.length - 1
              &&
              <Button type="primary" onClick={() => this.next()}>Next</Button>
            }
            {
              this.state.current === steps.length - 1
              &&
              <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
            }
            {
              this.state.current > 0
              &&
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            }
          </div>
        </div>

      </section>
    );
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
}
 
export default Switch;