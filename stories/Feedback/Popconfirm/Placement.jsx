import React, { Component } from 'react';
import { Popconfirm, message, Button } from 'antd';

const text = 'Are you sure delete this task?';

function confirm() {
  message.info('Click on Yes.');
}

class Placement extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Placement</h3>

        <div className="demo">
          <div style={{ marginLeft: 80, whiteSpace: 'nowrap' }}>
            <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button>TL</Button>
            </Popconfirm>
            <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button>Top</Button>
            </Popconfirm>
            <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button>TR</Button>
            </Popconfirm>
          </div>
          <div style={{ width: 70, float: 'left' }}>
            <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}}>LT</Button>
            </Popconfirm>
            <Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}}>Left</Button>
            </Popconfirm>
            <Popconfirm placement="leftBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}}>LB</Button>
            </Popconfirm>
          </div>
          <div style={{ width: 70, marginLeft: 250 }}>
            <Popconfirm placement="rightTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}}>RT</Button>
            </Popconfirm>
            <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}}>Right</Button>
            </Popconfirm>
            <Popconfirm placement="rightBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}}>RB</Button>
            </Popconfirm>
          </div>
          <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
            <Popconfirm placement="bottomLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button>BL</Button>
            </Popconfirm>
            <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button>Bottom</Button>
            </Popconfirm>
            <Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button>BR</Button>
            </Popconfirm>
          </div>
        </div>
      </section>
    );
  }
}
 
export default Placement;