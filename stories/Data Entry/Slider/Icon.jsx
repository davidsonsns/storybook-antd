import React, { Component } from 'react';
import { Slider, Icon } from 'antd';

class SliderIcon extends Component {
  state = {
    value: 0,
  }

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';

    const anticon = {
      position: 'absolute',
      top: '-2px',
      width: '16px',
      height: '16px',
      lineHeight: 1,
      fontSize: '16px',
      color: 'rgba(0, 0, 0, .25)'
    };

    return (
      <section className="example">
        <h3 className="ex-title">Slider with icon</h3>
        
        <div className="icon-wrapper" style={{position: 'relative', padding: '0 30px'}}>
          <Icon style={{ color: preColor, left: 0, ...anticon }} type="frown-o" />
          <Slider {...this.props} onChange={this.handleChange} value={value} />
          <Icon style={{ color: nextColor, right: 0, ...anticon }} type="smile-o" />
        </div>
      </section>
    );
  }
  
  handleChange = (value) => {
    this.setState({ value });
  }
}
 
export default SliderIcon;