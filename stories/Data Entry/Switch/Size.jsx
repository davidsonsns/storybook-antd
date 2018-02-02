import React, { Component } from 'react';
import { Switch } from 'antd';

class Size extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Two sizes</h3>
        <div>
          <Switch defaultChecked />
          <Switch className="ml20" size="small" defaultChecked />
        </div>
      </section>
    );
  }
}
 
export default Size;