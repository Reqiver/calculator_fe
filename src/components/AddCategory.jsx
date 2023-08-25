import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-bootstrap/Modal';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [amount, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			budget: parseInt(amount),
			details: []
		};

		dispatch({
			type: 'ADD_CATEGORY',
			payload: expense,
		});

		setName('');
		setCost('');
		props.onHide()
	};

	return (
		 <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
			 <Modal.Body>
		<form onSubmit={onSubmit}>
			<div className='row dark-text'>
				<div className='col-sm col-lg-4'>
					<label htmlFor='name'>Category Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div className='col-sm col-lg-4'>
					<label htmlFor='amount'>Category Budget</label>
					<input
						required='required'
						type='number'
						className='form-control'
						id='amount'
						value={amount}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
			 </Modal.Body>
    </Modal>
	);
};

export default AddExpenseForm;
