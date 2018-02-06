import React, { Component } from 'react';
import { Card } from 'antd';

class NoBorder extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">No border</h3>

        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </section>
    );
  }
}
 
export default NoBorder;