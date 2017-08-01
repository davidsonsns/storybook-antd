import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Radio, Icon, Menu, Dropdown } from 'antd';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

class ButtonSize extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const size = this.state.size;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" icon="download" size={size}>Download</Button>
        <Button type="primary" size={size}>Normal</Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />Backward
          </Button>
          <Button type="primary">
            Forward<Icon type="right" />
          </Button>
        </Button.Group>
      </div>
    );
  }
}

storiesOf('Button', module)
  .add('Types', () => (
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </div>
  ))
  .add('Sizes', () => (
    <ButtonSize />
  ))
  .add('Loadings', () => (
    <span>
      <Button type="primary" loading>
        Loading
        </Button>
      <Button type="primary" size="small" loading>
        Loading
        </Button>
      <br />
      <Button type="primary" loading={true}>
        Click me!
        </Button>
      <Button type="primary" icon="poweroff" loading={true}>
        Click me!
        </Button>
      <br />
      <Button shape="circle" loading />
      <Button type="primary" shape="circle" loading />
    </span>
  ))
  .add('Disabled', () => (
    <div>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>Primary(disabled)</Button>
      <br />
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
      <br />
      <Button>Ghost</Button>
      <Button disabled>Ghost(disabled)</Button>
      <br />
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>Dashed(disabled)</Button>
    </div>
  ))
  .add('Multiple Buttons', () => (
    <div>
      <Button type="primary">primary</Button>
      <Button>secondary</Button>
      <Dropdown overlay={menu}>
        <Button>
          more <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  ))
  .add('Ghost Button', () => (
    <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
      <Button type="primary" ghost>Primary</Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>Dashed</Button>
      <Button type="danger" ghost>danger</Button>
    </div>
  ))
