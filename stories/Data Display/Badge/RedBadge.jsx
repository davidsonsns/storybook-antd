import React, { Component } from 'react';
import { Badge, Icon } from 'antd';

class RedBadge extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Red Badge</h3>

        <div>
          <Badge dot>
            <Icon type="notification" />
          </Badge>
          <Badge className="ml20" dot>
            <a href="#">Link something</a>
          </Badge>
        </div>
      </section>
    );
  }
}
 
export default RedBadge;