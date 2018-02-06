import React, { Component } from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </section>
    );
  }
}
 
export default Basic;