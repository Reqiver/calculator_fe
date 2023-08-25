import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import { Accordion } from "react-bootstrap";

import CategoryItem from "./CategoryItem";

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	return (
		<>
			<Accordion>
				{expenses.map((expense) => (
					<CategoryItem key={expense.id} expense={expense}/>
				))}
			</Accordion>
		</>
	);
};

export default ExpenseList;
