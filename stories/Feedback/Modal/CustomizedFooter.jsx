import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class CustomizedFooter extends Component {
  state = {
    loading: false,
    visible: false,
  }

  render() {
    const { visible, loading } = this.state;

    return (
      <section className="example">
        <h3 className="ex-title">Customized Footer</h3>

        <div>
          <Button type="primary" onClick={this.showModal}>
            Open
          </Button>
          <Modal
            visible={visible}
            title="Title"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>Return</Button>,
              <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                Submit
              </Button>,
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
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
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }
}
 
export default CustomizedFooter;