import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <section className="example">
        <h3 className="ex-title">Login Form</h3>

        <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" style={{float: 'right'}} href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
              Log in
            </Button>
            Or <a href="">register now!</a>
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
}

LoginForm = Form.create()(LoginForm);
 
export default LoginForm;