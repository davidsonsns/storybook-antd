import React, { Component } from 'react';
import { Form, Select, Input, Button } from 'antd';

const FormItem = Form.Item;

const Option = Select.Option;

class CoordinatedControls extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <section className="example">
        <h3 className="ex-title">Coordinated Controls</h3>

        <Form style={{width: '600px'}} onSubmit={this.handleSubmit}>
          <FormItem
            label="Note"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            label="Gender"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please select your gender!' }],
            })(
              <Select
                placeholder="Select a option and change input text above"
                onChange={this.handleSelectChange}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            wrapperCol={{ span: 12, offset: 5 }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </section>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }
}

CoordinatedControls = Form.create()(CoordinatedControls);
 
export default CoordinatedControls;