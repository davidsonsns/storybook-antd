import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Radio, Button, Icon } from 'antd';

class Size extends Component {
  state = {
    size: 'default',
    /* isOpen: false */
  };

  render() {
    const size = this.state.size;

    return (
      <Fragment>
        <h3 className="ex-title">Size</h3>

        <div>
          <Radio.Group  className="mb20" value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large" onClick={action('Large Size')}>Large</Radio.Button>
            <Radio.Button value="default" onClick={action('Default Size')}>Default</Radio.Button>
            <Radio.Button value="small" onClick={action('Small Size')}>Small</Radio.Button>
          </Radio.Group>
          <br/>
          <br/>
          <Button type="primary" size={size} onClick={action('Primary Button Click')}>Primary</Button>
          <Button className="ml20" size={size} onClick={action('Default Button Click')}>Default</Button>
          <Button className="ml20" type="dashed" size={size} onClick={action('Dashed Button Click')}>Dashed</Button>
          <Button className="ml20" type="danger" size={size} onClick={action('Danger Button Click')}>Danger</Button>
        </div>

        {/* <p className="text">
          Ant Design supports a default button size
          as well as a large and small size.
          If a large or small button is desired, set the
          <span className="allotted">size</span> property to either
          <span className="allotted">large</span>
          or
          <span className="allotted">small</span>
          respectively. Omit the 
          <span className="allotted">size</span>
          property for a button with the default size.
        </p>

        <span className="ex-toggle" onClick={this.toggle}>
          { this.state.isOpen ? 'Hide ' : 'Show ' }
          Code
        </span>

        {
          this.state.isOpen ?
            this.getCode() : null
        } */}
      </Fragment>
    );
  }

  /* getCode() {
    return (
      <code className="code">
        <pre><i className="blue">import</i> &#123; Button, Radio, Icon &#125; <i className="blue">from</i> 'antd';</pre>
        <pre><i className="blue">class</i> ButtonSize <i className="blue">extends</i> React.Component &#123;</pre>
        <pre>  state = &#123;</pre>
        <pre>    size: <i className="green">'large'</i></pre>
        <pre>  &#125;;</pre>
        <pre></pre>
        <pre>  handleSizeChange = (e) => &#123;</pre>
        <pre>    <i className="blue">this</i>.<i className="red">setState</i>(&#123; size: e.target.value &#125;);</pre>
        <pre>  &#125;</pre>
        <pre></pre>
        <pre>  <i className="red">render</i>() &#123;</pre>
        <pre>    <i className="blue">const</i> size = <i className="blue">this</i>.state.size;</pre>
        <pre>    <i className="blue">return</i> (</pre>
        <pre>      &lt;<i className="red">div</i>&gt;</pre>
        <pre>        &lt;<i className="red">Radio.Group</i> <i className="green">value</i>=&#123;<i className="red">size</i>&#125; <i className="green">onChange</i>=&#123;<i className="blue">this</i>.<i className="red">handleSizeChange</i>&#125;&gt;</pre>
        <pre>          &lt;<i className="red">Radio.Button</i> <i className="green">value</i>="<i className="blue">large</i>"&gt;Large&lt;/<i className="red">Radio.Button</i>&gt;</pre>
        <pre>          &lt;<i className="red">Radio.Button</i> <i className="green">value</i>="<i className="blue">default</i>"&gt;Default&lt;/<i className="red">Radio.Button</i>&gt;</pre>
        <pre>          &lt;<i className="red">Radio.Button</i> <i className="green">value</i>="<i className="blue">small</i>"&gt;Small&lt;/<i className="red">Radio.Button</i>&gt;</pre>
        <pre>        &lt;/<i className="red">Radio.Group</i>&gt;</pre>
        <pre>        &lt;<i className="red">br</i> /&gt;&lt;<i className="red">br</i> /&gt;</pre>
        <pre>        &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>" <i className="green">size</i>=&#123;<i className="red">size</i>&#125;&gt;Primary&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>        &lt;<i className="red">Button</i> <i className="green">size</i>=&#123;<i className="red">size</i>&#125;&gt;Default&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>        &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">dashed</i>" <i className="green">size</i>=&#123;<i className="red">size</i>&#125;&gt;Dashed&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>        &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">danger</i>" <i className="green">size</i>=&#123;<i className="red">size</i>&#125;&gt;Danger&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>      &lt;/<i className="red">div</i>&gt;</pre>
        <pre>    );</pre>
        <pre>  &#125;</pre>
        <pre>&#125;</pre>
        <pre>ReactDOM.<i className="red">render</i>(&lt;<i className="red">ButtonSize</i> /&gt;, node);</pre>
      </code>
    );
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen }); */


  handleSizeChange = (e) => this.setState({ size: e.target.value });
}
 
export default Size;