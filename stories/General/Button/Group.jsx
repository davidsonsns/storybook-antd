import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Icon } from 'antd';

class Group extends Component {
  /* state = {
    isOpen: false
  }; */

  render() {
    const Group = Button.Group; 
    return (
      <Fragment>
        <h3 className="ex-title">Button Group</h3>

        <div>
          <span>
            <Group>
              <Button onClick={action('Cancel')}>Cancel</Button>
              <Button onClick={action('OK')}>OK</Button>
            </Group>
          </span>
          <span className="ml20">
            <Group>
              <Button disabled>L</Button>
              <Button disabled>M</Button>
              <Button disabled>R</Button>
            </Group>
          </span>
          <span className="ml20">
            <Group>
              <Button onClick={action('L')}>L</Button>
              <Button onClick={action('M')}>M</Button>
              <Button onClick={action('R')}>R</Button>
            </Group>
          </span>

          <br/><br/>

          <span>
            <Group>
              <Button type="primary" onClick={action('Go Back')}>
                <Icon type="left" />Go back
              </Button>
              <Button type="primary" onClick={action('Go forward')}>
                Go forward<Icon type="right" />
              </Button>
            </Group>
          </span>
          <span className="ml20">
            <Group>
              <Button type="primary" icon="cloud" onClick={action('Cloud')} />
              <Button type="primary" icon="cloud-download" onClick={action('Cloud-download')} />
            </Group>
          </span>
        </div>

        {/* <p className="text">
          Buttons can be grouped by placing multiple
          <span className="allotted">Button</span>
          components into a
          <span className="allotted">Button.Group</span>.
          The <span className="allotted">size</span> can be set to
          <span className="allotted">large</span>,
          <span className="allotted">small</span>
          or left unset resulting in a default size.
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
        <pre><i className="blue">import</i> &#123; Button, Icon &#125; <i className="blue">from</i> 'antd';</pre>
        <pre><i className="blue">const</i> Group = Button.Group;</pre>
        <pre>ReactDOM.<i className="red">render</i>(</pre>
        <pre>  &lt;<i className="red">div</i>&gt;</pre>
        <pre>    &lt;<i className="red">Group</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i>&gt;Cancel&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i>&gt;OK&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;/<i className="red">Group</i>&gt;</pre>
        <pre>    &lt;<i className="red">Group</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i> <i className="green">disabled</i>&gt;L&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i> <i className="green">disabled</i>&gt;M&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i> <i className="green">disabled</i>&gt;R&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;/<i className="red">Group</i>&gt;</pre>
        <pre>    &lt;<i className="red">Group</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i>&gt;L&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i>&gt;M&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i>&gt;R&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;/<i className="red">Group</i>&gt;</pre>
        <pre>    &lt;<i className="red">br</i> /&gt;&lt;<i className="red">br</i> /&gt;</pre>
        <pre>    &lt;<i className="red">Group</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>"&gt;</pre>
        <pre>        &lt;<i className="red">Icon</i> <i className="green">type</i>="<i className="blue">left</i>"/&gt;Go back</pre>
        <pre>      &lt;/<i className="red">Button</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>"&gt;</pre>
        <pre>        Go forward&lt;<i className="red">Icon</i> <i className="green">type</i>="<i className="blue">right</i>"/&gt;</pre>
        <pre>      &lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;/<i className="red">Group</i>&gt;</pre>
        <pre>    &lt;<i className="red">Group</i>&gt;</pre>
        <pre>      &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>" <i className="green">icon</i>="<i className="blue">cloud</i>"&gt;</pre>
        <pre>      &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>" <i className="green">icon</i>="<i className="blue">cloud-download</i>"&gt;</pre>
        <pre>    &lt;/<i className="red">Group</i>&gt;</pre>
        <pre>  &lt;/<i className="red">div</i>&gt;,</pre>
        <pre>  node</pre>
        <pre>);</pre>
      </code>
    );
  } */
}
 
export default Group;