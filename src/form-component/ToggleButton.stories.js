/**
 * `ToggleButton` component's storybook
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, array } from '@storybook/addon-knobs/react';
import ToggleButton from './ToggleButton';

// Story title
export default {
  component: ToggleButton,
  title: 'Components|Form components/Toggle button',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onToggle: action('onToggle')
};

// Story: default toggle button
export const Basic = () => (
  <ToggleButton
    { ...actionsData }
    labels={ array('labels', [ 'A', 'B', 'C' ]) }
    selected={ number('selected', 1) }
  />
);