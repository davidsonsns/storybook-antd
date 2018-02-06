import React, { Component } from 'react';
import { Card } from 'antd';

class Custom extends Component {
  render() {
    const { Meta } = Card;

    return (
      <section className="example">
        <h3 className="ex-title">Customized content</h3>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
      </section>
    );
  }
}
 
export default Custom;