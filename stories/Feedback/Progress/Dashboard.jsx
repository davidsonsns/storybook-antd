import React, { Component } from 'react';
import { Progress } from 'antd';

class Dashboard extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Dashboard</h3>

        <Progress type="dashboard" percent={75} />
      </section>
    );
  }
}
 
export default Dashboard;