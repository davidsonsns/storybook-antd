import React, { Component } from 'react';
import { InputNumber } from 'antd';

class Formatter extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Formatter</h3>

        <InputNumber
          defaultValue={1000}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
        />
        <InputNumber
          style={{marginLeft: '20px'}}
          defaultValue={100}
          min={0}
          max={100}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
        />
      </section>
    );
  }
}
 
export default Formatter;