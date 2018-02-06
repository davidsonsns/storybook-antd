import React, { Component, Fragment } from 'react';
import './style.css';

import Basic from './Basic';
import Notice from './Notice';
import Card from './Card';
import Select from './Select';

class CalendarPage extends Component {
  state = {}
  render() { 
    return (
      <Fragment>
        <h1 className="title">Calendar</h1>
        <p className="text">
          Container for displaying data in calendar form.
        </p>

        <h2 className="title">When to use</h2>

        <p className="text">
          When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Notice />
        <Card />
        <Select />

      </Fragment>
    );
  }
}
 
export default CalendarPage;