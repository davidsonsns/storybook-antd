import React, { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class Autosize extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Autosizing the height to fit the content</h3>

        <div style={{width: 600}}>
          <TextArea placeholder="Autosize height based on content lines" autosize />
          <div style={{ margin: '24px 0' }} />
          <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
        </div>
      </section>
    );
  }
}
 
export default Autosize;