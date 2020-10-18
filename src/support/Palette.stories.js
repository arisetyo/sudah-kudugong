/**
 * Storybook for UI palette
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import styles from './Palette.css';

// Story title
export default {
  title: 'Components/Support/Palette',
};

// Story
export const Palette = () => (
  <div className={styles.paletteContainer}>
    <div className={styles.paletteBox} style={{backgroundColor: 'var(--primary)'}}>
      <div className={styles.content}>
        <strong>--primary</strong>
        <p>rgba(0, 20, 38, 1)</p>
      </div>
    </div>

    <div className={styles.paletteBox} style={{backgroundColor: 'var(--alt-primary)'}}>
      <div className={styles.content}>
        <strong>--alt-primary</strong>
        <p>rgba(2, 82, 114, 1)</p>
      </div>
    </div>

    <div className={styles.paletteBox} style={{backgroundColor: 'var(--secondary)'}}>
      <div className={styles.content}>
        <strong>--secondary</strong>
        <p>rgba(191, 155, 110, 1)</p>
      </div>
    </div>

    <div className={styles.paletteBox} style={{backgroundColor: 'var(--alt-secondary)'}}>
      <div className={styles.content}>
        <strong>--alt-secondary</strong>
        <p>rgba(191, 179, 164, 1)</p>
      </div>
    </div>

    <div className={styles.paletteBox} style={{backgroundColor: 'var(--tertiary)'}}>
      <div className={styles.content}>
        <strong>--tertiary</strong>
        <p>rgba(140, 98, 61, 1)</p>
      </div>
    </div>
  </div>
);