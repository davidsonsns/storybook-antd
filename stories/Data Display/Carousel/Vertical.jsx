import React, { Component } from 'react';
import { Carousel } from 'antd';

class Vertical extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Vertical</h3>

        <Carousel vertical>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </section>
    );
  }
}
 
export default Vertical;