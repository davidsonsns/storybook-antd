import React, { Component, Fragment } from 'react';

import Avatar from './Basic';
import Type from './Type';
import Autoset from './Autoset';
import Badge from './Badge';

class AvatarPage extends Component {
  state = {}
  render() { 
    return (
      <Fragment>
        <h1 className="title">Avatar</h1>
        <p className="text">
          Avatars can be used to represent people or objects. It supports images, Icons, or letters.
        </p>

        <h2 className="title">Examples:</h2>

        <Avatar />
        <Type />
        <Autoset />
        <Badge />

      </Fragment>
    );
  }
}
 
export default AvatarPage;