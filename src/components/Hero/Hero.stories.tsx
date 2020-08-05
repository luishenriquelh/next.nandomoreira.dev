import React, { Fragment } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Hero } from '.';

export default { title: 'Components|Hero', decorators: [withKnobs] };

export const defaultComponent = () => (
  <Fragment>
    <Hero>
      <h1>Hello</h1>
    </Hero>
  </Fragment>
);
