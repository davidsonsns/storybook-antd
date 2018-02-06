import React, { Component } from 'react';
import { Spin, Alert } from 'antd';

class Description extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Customized description</h3>
        
        <Spin tip="Loading...">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      </section>
    );
  }
}
 
export default Description;