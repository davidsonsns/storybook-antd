import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

class Config extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Support more content configuration</h3>

        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </section>
    );
  }
}
 
export default Config;