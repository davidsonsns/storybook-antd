import React, { Component } from 'react';
import { Pagination } from 'antd';

class Controlled extends Component {
  state = {
    current: 3
  };

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Controlled pagination</h3>

        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
      </section>
    );
  }

  onChange = page => this.setState({ current: page });
}
 
export default Controlled;