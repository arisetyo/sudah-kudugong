/**
 * `Button` component's storybook
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import Button from './Button';

// Story title
export default { title: 'Button' };

// Story: with text
export const withText = () => <Button>Hello Button</Button>;

// Story: with emoji
export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

// Story: disabled button
export const disabled = () => <Button disabled={true}>Disabled</Button>;