import React, { Component } from 'react';
import { Progress } from 'antd';

class TextFormat extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Custom text format</h3>

        <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
        <Progress className="ml20" type="circle" percent={100} format={() => 'Done'} />
      </section>
    );
  }
}
 
export default TextFormat;