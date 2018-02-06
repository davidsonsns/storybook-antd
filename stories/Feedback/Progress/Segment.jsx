import React, { Component } from 'react';
import { Tooltip, Progress } from 'antd';

class Segment extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Progress bar with success segment</h3>

        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} successPercent={30} />
        </Tooltip>
      </section>
    );
  }
}
 
export default Segment;