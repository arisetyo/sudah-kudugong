/**
 * `Button` component
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import styles from './Button.css';

const Button = ({ children, onClick, disabled = false, addStyle }) => (
	<button
		disabled={ disabled }
		className={ `${styles.Button} ${addStyle ? addStyle : ''}` }
		onClick={ e => {
			e.preventDefault;
			onClick();
		} }
	>
		{ children }
	</button>
);

export default Button;