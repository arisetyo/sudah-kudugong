/**
 * `Tag` component's storybook
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import Tag from './Tag';

// Story title
export default {
  component: Tag,
  title: 'Components/Visual indicators/Tag',
};

// Story: default tag
export const Basic = () => (
  <Tag>Normal</Tag>
);

// Story: Italic content
export const Italic = () => (
  <Tag><em>Italic</em></Tag>
)