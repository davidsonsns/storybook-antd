import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class Basic extends Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;

    return (
      <section className="example">
        <h3 className="ex-title">Asynchronously close</h3>

        <div>
          <Button type="primary" onClick={this.showModal}>Open</Button>
          <Modal title="Title"
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
          >
            <p>{ModalText}</p>
          </Modal>
        </div>
      </section>
    );
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }
}
 
export default Basic;