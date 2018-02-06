import React, { Component } from 'react';
import { Spin, Alert, Switch } from 'antd';

class Delay extends Component {
  state = { loading: false };

  render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );

    return (
      <section className="example">
        <h3 className="ex-title">Delay</h3>
        
        
        <div>
          <Spin spinning={this.state.loading} delay={500} >{container}</Spin>
          <div style={{ marginTop: 16 }}>
            Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
          </div>
        </div>
      </section>
    );
  }


  toggle = (value) => {
    this.setState({ loading: value });
  }
}
 
export default Delay;