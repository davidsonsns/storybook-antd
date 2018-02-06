import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class Columns extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Card in column</h3>

        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
 
export default Columns;