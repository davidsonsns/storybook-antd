import React, { Component } from 'react';
import { Calendar } from 'antd';

class Card extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Card</h3>

        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} />
        </div>
      </section>
    );
  }
}
 
export default Card;