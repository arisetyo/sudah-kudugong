/**
 * Storybook for UI design system
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import styles from './DesignSystem.css';

// Story title
export default {
  title: 'Components/Support/Design System',
};

// Story for palette
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

// Story for typography
export const Typography = () => (
  <div className={styles.typographyContainer}>
    <h1>Font styles</h1>
    <p style={{fontWeight: '300'}}>Rubik light (300)</p>
    <p style={{fontWeight: '300'}}><em>Rubik light (300) italic</em></p>
    <p>Rubik regular (400)</p>
    <p><em>Rubik regular (400) italic</em></p>
    <p style={{fontWeight: '600'}}>Rubik bold (600)</p>
    <p style={{fontWeight: '600'}}><em>Rubik bold (600) italic</em></p>
    <p style={{fontWeight: '900'}}>Rubik black (900)</p>
    <p style={{fontWeight: '900'}}><em>Rubik black (900) italic</em></p>
  </div>
);