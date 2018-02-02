import React, { Component } from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

class IconItem extends Component {
  render() {
    return (
      <div className="icon">
        <Icon type={this.props.icon} />
        <br/>
        <span>{this.props.icon}</span>
      </div>
    );
  }
}

IconItem.propTypes = {
  icon: PropTypes.string.isRequired
};
 
export default IconItem;