import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class AutoComplate extends Component {
  state = {
    options: []
  };

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Automatic completion</h3>

        <Select
          mode="combobox"
          style={{ width: 200 }}
          onChange={this.handleChange}
          filterOption={false}
          placeholder="Enter the account name"
        >
          {this.state.options}
        </Select>
      </section>
    );
  }

  handleChange = (value) => {
    let options;
    if (!value || value.indexOf('@') >= 0) {
      options = [];
    } else {
      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {
        const email = `${value}@${domain}`;
        return <Option key={email}>{email}</Option>;
      });
    }
    this.setState({ options });
  }
}
 
export default AutoComplate;