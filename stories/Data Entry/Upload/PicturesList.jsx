import React, { Component } from 'react';
import { Upload, Button, Icon } from 'antd';
import './style.css';

const fileList = [{
  uid: -1,
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
  uid: -2,
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};

class PicturesList extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Pictures with list style</h3>

        <div>
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> upload
            </Button>
          </Upload>
          <br />
          <br />
          <Upload {...props2}>
            <Button>
              <Icon type="upload" /> upload
            </Button>
          </Upload>
        </div>
      </section>
    );
  }
}
 
export default PicturesList;