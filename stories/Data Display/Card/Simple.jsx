import React, { Component } from 'react';
import { Card } from 'antd';

class SimpleCard extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Simple Card</h3>

        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </section>
    );
  }
}
 
export default SimpleCard;