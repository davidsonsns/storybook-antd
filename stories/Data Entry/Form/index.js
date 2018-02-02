import React, { Component, Fragment } from 'react';

import HorizontalLogin from './HorizontalLogin';
import LoginForm from './LoginForm';
import Registration from './Registration';
import AdvencedSearch from './AdvencedSearch';
import FormInModal from './FormInModal';
import DynamicFormItem from './DynamicFormItem';
import TimeControls from './TimeControls';
import CustomizedFormControls from './CustomizedFormControls';
import StoreFormData from './StoreFormData';
import CustomizedValidation from './CustomizedValidation';
import CoordinatedControls from './CoordinatedControls';
import FormLayout from './FormLayout';
import DynamicRules from './DynamicRules';
import OtherControls from './OtherControls';

class DatePickerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Form</h1>

        <p className="text">
          Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.
        </p>

        <h2 className="title">Form</h2>

        <p className="text">
          Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.
        </p>

        <ul>
          <li>horizontal：to horizontally align the labels and controls of the fields. (Default)</li>
          <li>vertical：to vertically align the labels and controls of the fields.</li>
          <li>inline：to render form fields in one line.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <HorizontalLogin />
        <LoginForm />
        <Registration />
        <AdvencedSearch />
        <FormInModal />
        <DynamicFormItem />
        <TimeControls />
        <CustomizedFormControls />
        <StoreFormData />
        <CustomizedValidation />
        <CoordinatedControls />
        <FormLayout />
        <DynamicRules />
        <OtherControls />

      </Fragment>
    );
  }
}
 
export default DatePickerPage;