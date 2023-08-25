import React from 'react';
import classNames from "classnames";

const ViewCategoryBudget = (props) => {
	return (
		<div className='w-100 d-flex justify-content-between align-items-center'>
			{props.name}
			<span className={classNames(
				'allowed-budget',
				{'not-allowed-budget': props.amount>props.budget}
			)}>
				<span className='budget-text'>{props.amount} | </span>
				 {props.budget}₴
			</span>
		</div>
	);
};

export default ViewCategoryBudget;
