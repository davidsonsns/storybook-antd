import React, { Component } from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';

class Select extends Component {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  };

  render() {
    const { value, selectedValue } = this.state;

    return (
      <section className="example">
        <h3 className="ex-title">Selectable Calendar</h3>
        
        <div>
          <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
          <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
        </div>
      </section>
    );
  }

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  }

  onPanelChange = (value) => {
    this.setState({ value });
  }
}
 
export default Select;