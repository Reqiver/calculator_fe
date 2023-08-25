import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total + item.details.reduce((acc, el) => {return acc + el.amount}, 0));
	}, 0);

	return (
		<div className='alert alert-primary p-3'>
			<span>Spent so far: {total}₴</span>
		</div>
	);
};

export default ExpenseTotal;
