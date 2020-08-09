/**
 * `Button` component
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import styles from './ToggleButton.css';

const ToggleButton = ({selected, labels, onToggle}) => (
	<div
		className={`${styles.ToggleButton}`}
	>
	{
		labels.map((label, index) => (
			<button
				disabled={ onToggle ? false : true }
				className={ `${selected === index ? styles.selected : ''}` }
				onClick={e => {
					e.preventDefault();
					onToggle(index);
				}}
			>
				{label}
			</button>
		))
	}
	</div>
);

export default ToggleButton;