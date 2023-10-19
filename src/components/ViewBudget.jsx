import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";
import AmountText from "./AmountTexts";

const ViewBudget = (props) => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total + item.budget);
	}, 0);

	return (
		<>
			<span>Budget: <AmountText budget={props.budget} amount={total} black={true}/></span>
			<button type='button' className='btn btn-primary' onClick={props.handleEditClick}>
				✏️
			</button>
		</>
	);
};

export default ViewBudget;
