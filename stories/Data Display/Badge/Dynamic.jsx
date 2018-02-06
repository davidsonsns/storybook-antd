import React, { Component } from 'react';
import { Badge, Button, Icon, Switch } from 'antd';

class Dynamic extends Component {
  state = {
    count: 5,
    show: true,
  };

  render() {
    const ButtonGroup = Button.Group;

    return (
      <section className="example">
        <h3 className="ex-title">Dynamic</h3>

        <div>
          <div>
            <Badge className="badge" count={this.state.count}>
              <a href="#" className="head-example" />
            </Badge>
            <ButtonGroup className="ml20">
              <Button onClick={this.decline}>
                <Icon type="minus" />
              </Button>
              <Button onClick={this.increase}>
                <Icon type="plus" />
              </Button>
            </ButtonGroup>
          </div>
          <div style={{ marginTop: 10 }}>
            <Badge className="badge" dot={this.state.show}>
              <a href="#" className="head-example" />
            </Badge>
            <Switch className="ml20" onChange={this.onChange} checked={this.state.show} />
          </div>
        </div>
      </section>
    );
  }

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  }

  onChange = show => this.setState({ show });
}
 
export default Dynamic;