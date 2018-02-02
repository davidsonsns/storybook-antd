import React, { Component } from 'react';
import { Pagination } from 'antd';

class Jumper extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Jumper</h3>

        <Pagination showQuickJumper defaultCurrent={2} total={500} />
      </section>
    );
  }
}
 
export default Jumper;