import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';

class ButtonGhost extends Component {
  render() { 
    return (
      <Fragment>
        <h3 className="ex-title">Ghost Button</h3>
        <div style={{ background: 'rgb(47, 45, 165)', padding: '26px 16px 16px' }}>
          <Button type="primary" ghost onClick={action('Primary Ghost Button Clicked')}>Primary</Button>
          <Button className="ml20" ghost onClick={action('Default Ghost Button Clicked')}>Default</Button>
          <Button className="ml20" type="dashed" ghost onClick={action('Dashed Ghost Button Clicked')}>Dashed</Button>
          <Button className="ml20" type="danger" ghost onClick={action('Danger Ghost Button Clicked')}>danger</Button>
        </div>
      </Fragment>
    );
  }
}
 
export default ButtonGhost;