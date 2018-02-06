import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';

class Custom extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Custom</h3>

        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </section>
    );
  }
}
 
export default Custom;