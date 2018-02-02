import React, { Component, Fragment } from 'react';

import Avatar from './Avatar';
import PicturesWall from './PicturesWall';
import PicturesList from './PicturesList';

class UploadPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Upload</h1>

        <p className="text">
          Upload file by selecting or dragging.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          Uploading is the process of publishing information
          (web pages, text, pictures, video, etc.)
          to a remote server via a web page or upload tool.
        </p>

        <ul>
          <li>When you need to upload one or more files.</li>
          <li>When you need to show the process of uploading.</li>
          <li>When you need to upload files by dragging and dropping.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Avatar />
        <PicturesWall />
        <PicturesList />

      </Fragment>
    );
  }
}
 
export default UploadPage;