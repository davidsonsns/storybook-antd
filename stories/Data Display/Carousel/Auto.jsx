import React, { Component } from 'react';
import { Carousel } from 'antd';

class Auto extends Component {
  state = {}
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Scroll automatically</h3>

        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </section>
    );
  }
}
 
export default Auto;