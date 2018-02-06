import React, { Component } from 'react';
import { Card } from 'antd';

class Loading extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Loading card</h3>

        <Card loading title="Card title" style={{ width: '34%' }}>
          Whatever content
        </Card>
      </section>
    );
  }
}
 
export default Loading;