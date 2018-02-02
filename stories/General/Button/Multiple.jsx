import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Dropdown, Icon, Menu } from 'antd';

class ButtonMultiple extends Component {
  /* state = {
    isOpen: false
  }; */

  render() {
    const menu = (
      <Menu onClick={action('Click')}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );

    return (
      <Fragment>
        <h3 className="ex-title">Multiple Buttons</h3>

        <div>
          <Dropdown overlay={menu}>
            <Button>
              more <Icon type="down" />
            </Button>
          </Dropdown>
        </div>

        {/* <p className="text">
          If you need several buttons, we recommend that you
          use 1 primary button + n secondary buttons, and
          if there are more than three operations,
          you can group some of them into
          <span className="allotted">Dropdown.Button</span>.
        </p>

        <span className="ex-toggle" onClick={this.toggle}>
          { this.state.isOpen ? 'Hide ' : 'Show ' }
          Code
        </span>

        {  // Block Code
          this.state.isOpen ?
            this.getCode() : null
        } */}
      </Fragment>
    );
  }

  /* toggle = () => this.setState({ isOpen: !this.state.isOpen });

  getCode() {
    return (
      <code className="code">
        <pre><i className="blue">import</i> &#123; Button, Dropdown, Icon, Menu &#125;  <i className="blue">from</i> 'antd';</pre>
        <pre><i className="blue">const</i> menu = (</pre>
        <pre>  &lt;<i className="red">Menu</i>&gt;</pre>
        <pre>    &lt;<i className="red">Menu</i>.<i className="red">Item</i> <i className="green">key</i>="1"&gt;1st item&lt;/<i className="red">Menu</i>.<i className="red">Item</i>&gt;</pre>
        <pre>    &lt;<i className="red">Menu</i>.<i className="red">Item</i> <i className="green">key</i>="2"&gt;2st item&lt;/<i className="red">Menu</i>.<i className="red">Item</i>&gt;</pre>
        <pre>    &lt;<i className="red">Menu</i>.<i className="red">Item</i> <i className="green">key</i>="3"&gt;3st item&lt;/<i className="red">Menu</i>.<i className="red">Item</i>&gt;</pre>
        <pre>  &lt;/<i className="red">Menu</i>&gt;</pre>
        <pre>);</pre>
        <pre>ReactDOM.<i className="red">render</i>(</pre>
        <pre>  &lt;<i className="red">div</i>&gt;</pre>
        <pre>    &lt;<i className="red">Dropdown</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i>&gt;</pre>
        <pre>        more &lt;<i className="red">Icon</i> <i className="green">type</i>="<i className="blue">down</i>"/&gt;</pre>
        <pre>      &lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;/<i className="red">Dropdown</i>&gt;</pre>
        <pre>  &lt;/<i className="red">div</i>&gt;,</pre>
        <pre>  node</pre>
        <pre>);</pre>
      </code>
    );
  } */
}
 
export default ButtonMultiple;