import React, { Component } from 'react';
import { Pagination } from 'antd';

class Size extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="title">Mini pagination</h3>
        <div className="mb20">
          <Pagination size="small" total={50} />
        </div>
        <div className="mb20">
          <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        </div>
        <Pagination size="small" total={50} showTotal={this.showTotal} />
      </section>
    );
  }

  showTotal(total) {
    return `Total ${total} items`;
  }
}
 
export default Size;