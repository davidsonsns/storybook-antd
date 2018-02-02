import React, { Component } from 'react';
import { Switch, Icon } from 'antd';

class IconSwitch extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Text & icon</h3>
        
        <div>
          <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
          <Switch className="ml20" checkedChildren="1" unCheckedChildren="0" />
          <Switch className="ml20" checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} defaultChecked />
        </div>
      </section>
    );
  }
}
 
export default IconSwitch;