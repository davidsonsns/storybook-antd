import React, { Component } from 'react';
import { Modal, Button } from 'antd';

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}

class Internationalization extends Component {
  state = { visible: false };

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Internationalization</h3>
        <Button onClick={confirm}>Confirm</Button>
      </section>
    );
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
}
 
export default Internationalization;