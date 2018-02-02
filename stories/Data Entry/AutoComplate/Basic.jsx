import React, { Component } from 'react';
import { AutoComplete } from 'antd';

class Basic extends Component {
  state = {
    dataSource: []
  };
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic Usage</h3>

        <AutoComplete
          dataSource={this.state.dataSource}
          style={{ width: 200 }}
          onSearch={this.handleSearch}
          placeholder="input here"
        />
      </section>
    );
  }

  handleSearch = value => this.setState({ dataSource: !value ?
      [] :
      [
        value,
        value + value,
        value + value + value,
      ],
    });
}
 
export default Basic;