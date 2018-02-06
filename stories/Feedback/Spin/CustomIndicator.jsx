import React, { Component } from 'react';
import { Spin, Icon } from 'antd';

class CustomIndicator extends Component {
  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

    return (
      <section className="example">
        <h3 className="ex-title">Custom spinning indicator</h3>
        
        <Spin indicator={antIcon} />
      </section>
    );
  }
}
 
export default CustomIndicator;