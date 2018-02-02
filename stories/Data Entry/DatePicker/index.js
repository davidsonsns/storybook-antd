import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Format from './Format';
import Size from './Size';
import ChooseTime from './ChooseTime';
import Disabled from './Disabled';
import DisDate from './DisDate';
import Custom from './Custom';
import Preset from './Preset';
import Footer from './Footer';
import Panel from './Panel';
import CustomRender from './CustomRender';

class DatePickerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">DatePicker</h1>

        <p className="text">
          To select or input a date.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          By clicking the input box, you can select a date from a popup calendar.
        </p>


        <h2 className="title">Examples:</h2>

        <Basic />
        <Format />
        <Size />
        <ChooseTime />
        <Disabled />
        <DisDate />
        <Custom />
        <Preset />
        <Footer />
        <Panel />
        <CustomRender />

      </Fragment>
    );
  }
}
 
export default DatePickerPage;