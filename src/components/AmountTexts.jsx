import React from 'react';
import classNames from "classnames";
import { amountFormatter } from '../utils.js'

const AmountText = (props) => {
	return (
		<>
			<span className={classNames(
				'allowed-budget',
				{'not-allowed-budget': props.amount>props.budget}
			)}>
				<span className={classNames(
					'budget-text',
					{'dark-text': props.black}
			)}>{amountFormatter(props.amount)} | </span>
				 {amountFormatter(props.budget)}₴
			</span>
		</>
	);
};

export default AmountText;
