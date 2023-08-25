import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import RemainingBudget from './components/Remaining';
import AddCategory from "./components/AddCategory";

const App = () => {
	const [modalShow, setModalShow] = useState(false);
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>My Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<div className='row mt-3'>
					<Button className='' variant="primary" onClick={() => setModalShow(true)}>
						Create Category
					</Button>
					<div className='col-sm '>
						<AddCategory show={modalShow} onHide={() => setModalShow(false)} />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;