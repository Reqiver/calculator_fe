import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total + item.details.reduce((acc, el) => {return acc + el.amount}, 0));
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert p-3 ${alertType}`}>
			<span>Remaining: {budget - totalExpenses}₴</span>
		</div>
	);
};

export default RemainingBudget;
