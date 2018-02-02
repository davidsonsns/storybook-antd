import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';

class Loading extends Component {
  state = {
    first: false,
    power: false,
    /* isOpen: false */
  };

  render() { 
    return (
      <Fragment>
        <h3 className="ex-title">Loading</h3>

        <div>
          <Button type="primary" loading>
            Loading
          </Button>

          <Button type="primary" size="small" className="ml20" loading>
            Loading
          </Button>

          <br /><br />

          <Button type="primary" loading={this.state.first} onClick={() => this.setState({ first: true })}>
            Click me!
          </Button>

          <Button className="ml20" type="primary" icon="poweroff" loading={this.state.power} onClick={() => this.setState({ power: true })}>
            Click me!
          </Button>

          <br /><br />
          
          <Button shape="circle" loading />
          
          <Button className="ml20" type="primary" shape="circle" loading />
        </div>

        {/* <p className="text">
          A loading indicator can be
          added to a button by setting
          the loading property on the
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
  
  /* toggle = () => this.setState({ isOpen: !this.state.isOpen });

  getCode() {
    return (
      <code className="code">
        <pre><i className="blue">import</i> &#123; Button &#125; <i className="blue">from</i> 'antd';</pre>
        <pre><i className="blue">class</i> App <i className="blue">extends</i> React.Component &#123;</pre>
        <pre>  state = &#123;</pre>
        <pre>    loading: <i className="red">false</i>,</pre>
        <pre>    iconLoading: <i className="red">false</i></pre>
        <pre>  &#125;;</pre>
        <pre>  enterLoading = () => &#123;</pre>
        <pre>    <i className="blue">this</i>.<i className="red">setState</i>(&#123;loading: <i className="red">true</i>&#125;);</pre>
        <pre>  &#125;;</pre>
        <pre>  enterIconLoading = () => &#123;</pre>
        <pre>    <i className="blue">this</i>.<i className="red">setState</i>(&#123;iconLoading: <i className="red">true</i>&#125;);</pre>
        <pre>  &#125;;</pre>
        <pre>  <i className="red">render</i>() &#123;</pre>
        <pre>    <i className="blue">return</i> (</pre>
        <pre>      &lt;<i className="red">div</i>&gt;</pre>
        <pre>        &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>" <i className="green">loading</i>&gt;</pre>
        <pre>          Loading</pre>
        <pre>        &lt;/<i className="red">Button</i>&gt;</pre>
        <pre>        &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>" <i className="green">size</i>="<i className="blue">small</i>" <i className="green">loading</i>&gt;</pre>
        <pre>          Loading</pre>
        <pre>        &lt;/<i className="red">Button</i>&gt;</pre>
        <pre>        &lt;<i className="red">br</i> /&gt;&lt;<i className="red">br</i> /&gt;</pre>
        <pre>        &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>" <i className="green">loading</i>=&#123;<i className="blue">this</i>.<i className="red">state</i>.<i className="red">loading</i>&#125; <i className="green">onClick</i>=&#123;<i className="blue">this</i>.<i className="red">enterLoading</i>&#125;&gt;</pre>
        <pre>          Click me!</pre>
        <pre>        &lt;/<i className="red">Button</i>&gt;</pre>
        <pre>        &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>" <i className="green">icon</i>="<i className="blue">poweroff</i>" <i className="green">loading</i>=&#123;<i className="blue">this</i>.<i className="red">state</i>.<i className="red">iconLoading</i>&#125; <i className="green">onClick</i>=&#123;<i className="blue">this</i>.<i className="red">enterIconLoading</i>&#125;&gt;</pre>
        <pre>          Click me!</pre>
        <pre>        &lt;/<i className="red">Button</i>&gt;</pre>
        <pre>        &lt;<i className="red">Button</i> <i className="green">shape</i>="<i className="blue">circle</i>" <i className="green">loading</i> /&gt;</pre>
        <pre>        &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>" <i className="green">shape</i>="<i className="blue">circle</i>" <i className="green">loading</i> /&gt;</pre>
        <pre>      &lt;/<i className="red">div</i>&gt;</pre>
        <pre>    );</pre>
        <pre>  }</pre>
        <pre>}</pre>
        <pre>ReactDOM.<i className="red">render</i>(&lt;<i className="red">App</i> /&gt;, node);</pre>
      </code>
    );
  } */
}
 
export default Loading;