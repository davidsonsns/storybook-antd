import React, { Component } from 'react';
import { Popconfirm } from 'antd';

class LocaleText extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Locale Text</h3>

        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
          <a href="#">Delete</a>
        </Popconfirm>
      </section>
    );
  }
}
 
export default LocaleText;