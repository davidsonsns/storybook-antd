import React, { Component, Fragment } from 'react';

import Type from './Types';
import Size from './Size';
import Icon from './Icon';
import Disabled from './Disabled';
import Multiple from './Multiple';
import Loading from './Loading';
import Group from './Group';
import Ghost from './Ghost';

class ButtonPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Button</h1>

        <h2 className="title">When to use</h2>

        <p className="text">
          A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
        </p>

        <h2 className="title">Exemples:</h2>

        <section className="example">
          <Type />
        </section>

        <section className="example">
          <Icon />
        </section>

        <section className="example">
          <Size />
        </section>

        <section className="example">
          <Disabled />
        </section>

        <section className="example">
          <Loading />
        </section>

        <section className="example">
          <Multiple />
        </section>

        <section className="example">
          <Group />
        </section>

        <section className="example">
          <Ghost />
        </section>
      </Fragment>
    );
  }
}
 
export default ButtonPage;





/* import { storiesOf } from '@storybook/react';

import ButtonTypes from './Types';
import ButtonSize from './Size';
import ButtonLoading from './Loading';
import ButtonDisabled from './Disabled';
import ButtonMultiple from './Multiple';
import ButtonGhost from './Ghost';

storiesOf('Button', module)
  .add('Types', () => <ButtonTypes />)
  .add('Sizes', () => <ButtonSize />)
  .add('Loadings', () => <ButtonLoading />)
  .add('Disabled', () => <ButtonDisabled />)
  .add('Multiple Buttons', () => <ButtonMultiple />)
  .add('Ghost Button', () => <ButtonGhost />);
 */