import React, { Component } from 'react';
import { Checkbox, Button } from 'antd';

class Controll extends Component {

  state = {
    checked: true,
    disabled: false,
  };

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
    return (
      <section className="example">
        <h3 className="ex-title">Controlled Checkbox</h3>

        <p style={{ marginBottom: '20px' }}>
          <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </Checkbox>
        </p>

        <p>
          <Button
            type="primary"
            size="small"
            onClick={this.toggleChecked}
          >
            {!this.state.checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button
            style={{ marginLeft: '10px' }}
            type="primary"
            size="small"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? 'Disable' : 'Enable'}
          </Button>
        </p>
      </section>
    );
  }

  toggleChecked = () => this.setState({ checked: !this.state.checked });

  toggleDisable = () => this.setState({ disabled: !this.state.disabled });

  onChange = e => this.setState({ checked: e.target.checked });
}
 
export default Controll;