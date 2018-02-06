import React, { Component } from 'react';
import { Badge } from 'antd';

class Status extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Status</h3>

        <div>
          <Badge status="success" />
          <Badge status="error" />
          <Badge status="default" />
          <Badge status="processing" />
          <Badge status="warning" />
          <br />
          <Badge status="success" text="Success" />
          <br />
          <Badge status="error" text="Error" />
          <br />
          <Badge status="default" text="Default" />
          <br />
          <Badge status="processing" text="Processing" />
          <br />
          <Badge status="warning" text="Warning" />
        </div>
      </section>
    );
  }
}
 
export default Status;