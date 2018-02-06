import React, { Component } from 'react';
import { Modal, Button } from 'antd';

const confirm = Modal.confirm;

class Confirm extends Component {
  state = { visible: false };

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Confirmation modal dialog</h3>

        <div>
          <Button onClick={this.showConfirm}>
            Confirm
          </Button>
          <Button className="ml20" onClick={this.showDeleteConfirm} type="dashed">
            Delete
          </Button>
          <Button className="ml20" onClick={this.showConfirm}>
            Confirm
          </Button>
        </div>
      </section>
    );
  }

  showConfirm() {
    confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  showDeleteConfirm() {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  showConfirm() {
    confirm({
      title: 'Do you want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }
}
 
export default Confirm;