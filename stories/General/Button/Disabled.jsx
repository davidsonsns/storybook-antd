import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';

class ButtonDisabled extends Component {
  /* state = {
    isOpen: false
  }; */

  render() { 
    return (
      <Fragment>
        <h3 className="ex-title">Disabled</h3>

        <div>
          <Button type="primary" onClick={action('Primary Button Clicked')}>Primary</Button>
          <Button className="ml20" type="primary" disabled>Primary(disabled)</Button>
          <Button className="ml20" onClick={action('Default Button Clicked')}>Default</Button>
          <Button className="ml20" disabled>Default(disabled)</Button>
          <Button className="ml20" type="dashed" onClick={action('Dashed Button Clicked')}>Dashed</Button>
          <Button className="ml20" type="dashed" disabled>Dashed(disabled)</Button>
          <Button className="ml20" type="danger" onClick={action('Danger Button Clicked')}>Danger</Button>
          <Button className="ml20" type="danger" disabled>Danger(disabled)</Button>
        </div>

        {/* <p className="text">
          To mark a button as
          <span className="allotted">disabled</span>,
          add the disabled property to the
          <span className="allotted">Button</span>.
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

  /* toggle = () => this.setState({ isOpen: !this.state.isOpen }); */

  /* getCode() {
    return (
      <code className="code">
        <pre><i className="blue">import</i> &#123; Button &#125; <i className="blue">from</i> <i className="green">'antd'</i>;</pre>
        <pre>ReactDOM.<i className="red">render</i>(</pre>
        <pre>  &lt;<i className="red">div</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>"&gt;Primary&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>" <i className="green">disabled</i>&gt;Primary(disabled)&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i>&gt;Default&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">disabled</i>&gt;Default(disabled)&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">dashed</i>"&gt;Dashed&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">dashed</i>" <i className="green">disabled</i>&gt;Dashed(disabled)&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">danger</i>"&gt;Danger&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">danger</i>" <i className="green">disabled</i>&gt;Danger(disabled)&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>  &lt;/<i className="red">div</i>&gt;,</pre>
        <pre>  node</pre>
        <pre>);</pre>
      </code>
    );
  } */
}
 
export default ButtonDisabled;