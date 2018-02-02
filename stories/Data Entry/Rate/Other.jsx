import React, { Component } from 'react';
import { Rate, Icon } from 'antd';

class Other extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Other Character</h3>

        <Rate character={<Icon type="heart" />} allowHalf />
        <br />
        <Rate character="A" allowHalf style={{ fontSize: 36 }} />
        <br />
        <Rate character="好" allowHalf />
      </section>
    );
  }
}
 
export default Other;