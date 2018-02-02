import React, { Component } from 'react';
import { Pagination } from 'antd';

class Text extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Prev and next</h3>
        <Pagination total={500} itemRender={this.itemRender} />
      </section>
    );
  }

  itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    } else if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
}
 
export default Text;