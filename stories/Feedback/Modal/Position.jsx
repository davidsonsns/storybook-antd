import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class Position extends Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  }

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">To customize the position of modal</h3>

        <div>
          <Button type="primary" onClick={() => this.setModal1Visible(true)}>Display a modal dialog at 20px to Top</Button>
          <Modal
            title="20px to Top"
            style={{ top: 20 }}
            visible={this.state.modal1Visible}
            onOk={() => this.setModal1Visible(false)}
            onCancel={() => this.setModal1Visible(false)}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
          <br /><br />
          <Button type="primary" onClick={() => this.setModal2Visible(true)}>Vertically centered modal dialog</Button>
          <Modal
            title="Vertically centered modal dialog"
            wrapClassName="vertical-center-modal"
            visible={this.state.modal2Visible}
            onOk={() => this.setModal2Visible(false)}
            onCancel={() => this.setModal2Visible(false)}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </div>
      </section>
    );
  }


  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
}
 
export default Position;