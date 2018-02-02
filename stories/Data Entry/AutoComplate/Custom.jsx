import React, { Component } from 'react';
import { AutoComplete } from 'antd';

class Custom extends Component {
  state = {
    result: []
  };

  render() {
    const Option = AutoComplete.Option;
    const { result } = this.state;
    const children = result.map((email) => {
      return <Option key={email}>{email}</Option>;
    });

    return (
      <section className="example">
        <h3 className="ex-title">Customized</h3>

          <AutoComplete
            style={{ width: 200 }}
            onSearch={this.handleSearch}
            placeholder="input here"
          >
            {children}
          </AutoComplete>
      </section>
    );
  }

  handleSearch = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  }
}
 
export default Custom;