import React, { Component } from 'react';
import { Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Style extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Radio Style</h3>

        <div>
          <RadioGroup defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b">Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
        </div>
        <div style={{ marginTop: 16 }}>
          <RadioGroup defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b" disabled>Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
        </div>
        <div style={{ marginTop: 16 }}>
          <RadioGroup disabled defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b">Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
        </div>
      </section>
    );
  }
}
 
export default Style;