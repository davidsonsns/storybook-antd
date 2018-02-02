import React, { Component } from 'react';
import { Switch } from 'antd';

class Loading extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Loading</h3>

        <div>
          <Switch loading defaultChecked />
          <Switch className="ml20" size="small" loading />
        </div>
      </section>
    );
  }
}
 
export default Loading;