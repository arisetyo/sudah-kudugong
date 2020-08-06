/**
 * `Button` component's storybook
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import Button from './Button';

// Story title
export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClick: action('onClick')
};

// Story: default button
export const Basic = () => (
  <Button 
    { ...actionsData }
    disabled={ boolean('disabled', false) }
  >
    This is a generic button
  </Button>
);