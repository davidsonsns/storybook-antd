import React, { Component } from 'react';
import { Avatar, Button } from 'antd';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];


class Autoset extends Component {
  state = {
    user: UserList[0],
    color: colorList[0],
  };

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Autoset Font Size</h3>

        <div>
          <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
            {this.state.user}
          </Avatar>
          <Button size="small" style={{ marginLeft: 16, verticalAlign: 'middle' }} onClick={this.changeUser}>
            Change
          </Button>
        </div>
      </section>
    );
  }

  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
    });
  }
}
 
export default Autoset;