import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';

const FormItem = Form.Item;

class FormLayout extends Component {
  state = {
    formLayout: 'horizontal',
  };

  render() {
    const { formLayout } = this.state;

    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;

    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;

    return (
      <section className="example">
        <h3 className="ex-title">Form Layout</h3>

        <Form style={{width: '600px'}} layout={formLayout}>
          <FormItem
            label="Form Layout"
            {...formItemLayout}
          >
            <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </FormItem>
          <FormItem
            label="Field A"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem
            label="Field B"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
      </section>
    );
  }

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }
}
 
export default FormLayout;