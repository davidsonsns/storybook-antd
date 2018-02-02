import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';

class Icon extends Component {
  /* state = {
    isOpen: false
  } */
  render() {
    return (
      <Fragment>
        <h3 className="ex-title">Icon</h3>
        
        <div>
          <Button type="primary" shape="circle" icon="search" onClick={action('Search')} />
          <Button className="ml20" type="primary" icon="search" onClick={action('Search')}>Search</Button>
          <Button className="ml20" shape="circle" icon="search" onClick={action('Search')} />
          <Button className="ml20" icon="search" onClick={action('Search')}>Search</Button>
          <Button className="ml20" type="dashed" shape="circle" icon="search" onClick={action('Search')} />
          <Button className="ml20" type="dashed" icon="search" onClick={action('Search')}>Search</Button>
        </div>

        {/* <p className="text">
          <span className="allotted">Button</span>
          components can contain an
          <span className="allotted">Icon</span>.
          This is done by setting the
          <span className="allotted">icon</span>
          property or placing an 
          <span className="allotted">Icon</span>
          component within the
          <span className="allotted">Button</span>.
          If you want specific control
          over the positioning and
          placement of the
          <span className="allotted">Icon</span>,
          then that should be done by
          placing the
          <span className="allotted">Icon</span>
          component within the
          <span className="allotted">Button</span>
          rather than using the 
          <span className="allotted">icon</span> property.
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
        <pre><i className="blue">import</i> &#123; Button &#125; <i className="blue">from</i> 'antd';</pre>
        <pre>ReactDOM.<i className="red">render</i>(</pre>
        <pre>  &lt;<i className="red">div</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>" <i className="green">shape</i>="<i className="blue">circle</i>" <i className="green">icon</i>="<i className="blue">search</i>" /&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>" <i className="green">icon</i>="<i className="blue">search</i>"&gt;Search&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">shape</i>="<i className="blue">circle</i>" <i className="green">icon</i>="<i className="blue">search</i>" /&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">icon</i>="<i className="blue">search</i>"&gt;Search&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">dashed</i>" <i className="green">shape</i>="<i className="blue">circle</i>" <i className="green">icon</i>="<i className="blue">search</i>" /&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">dashed</i>" <i className="green">icon</i>="<i className="blue">search</i>"&gt;Search&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>  &lt;/<i className="red">div</i>&gt;,</pre>
        <pre>  node</pre>
        <pre>);</pre>
      </code>
    );
  } */
}
 
export default Icon;