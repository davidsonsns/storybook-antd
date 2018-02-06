import React, { Component } from 'react';
import { Carousel } from 'antd';

class FadeIn extends Component {
  state = {}
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Fade In</h3>

        <Carousel effect="fade">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </section>
    );
  }
}
 
export default FadeIn;