import React, { Component } from 'react';
import { Avatar, Badge } from 'antd';

class BadgeAvatar extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">With Badge</h3>
        
        <div>
          <span style={{ marginRight: 24 }}>
            <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
          </span>
          <span>
            <Badge dot><Avatar shape="square" icon="user" /></Badge>
          </span>
        </div>
      </section>
    );
  }
}
 
export default BadgeAvatar;