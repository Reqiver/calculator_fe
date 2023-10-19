import React from 'react';
import AmountText from "./AmountTexts";

const ViewCategoryBudget = (props) => {
	return (
		<div className='w-100 d-flex justify-content-between align-items-center'>
			{props.name}
			<AmountText budget={props.budget} amount={props.amount} black={false}/>
		</div>
	);
};

export default ViewCategoryBudget;
