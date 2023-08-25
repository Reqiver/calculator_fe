import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: {id: props.id, categoryId: props.categoryId}
		});
	};

	return (
		<li className='alert alert-dark d-flex justify-content-between align-items-center p-2'>
			{props.name}
			<div>
				<span className='badge badge-primary badge-pill'>{props.amount}₴</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;
