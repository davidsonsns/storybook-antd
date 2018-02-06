import React, { Component } from 'react';
import { Progress } from 'antd';

class ProgressBar extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Progress bar</h3>

        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </section>
    );
  }
}
 
export default ProgressBar;