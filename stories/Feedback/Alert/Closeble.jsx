import React, { Component } from 'react';
import { Alert } from 'antd';

class Closeble extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Closeble</h3>
        
        <Alert
          className="mb20"
          message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
          type="warning"
          closable
        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description Error Description Error Description"
          type="error"
          closable
        />
      </section>
    );
  }
}
 
export default Closeble;