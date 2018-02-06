import React, { Component } from 'react';
import { Badge } from 'antd';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <div>
          <Badge className="badge" count={5}>
            <a href="#" className="head-example" />
          </Badge>
        </div>
      </section>
    );
  }
}
 
export default Basic;