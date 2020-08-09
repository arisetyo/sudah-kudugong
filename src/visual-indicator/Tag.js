/**
 * `Button` component
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import styles from './Tag.css';

const Tag = ({children}) => (
	<div className={styles.Tag}>
		{children}
	</div>
);

export default Tag;