import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-bootstrap/Modal';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [comment, setComment] = useState('');
	const [amount, setAmount] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const data = {
			category_id: props.categoryId,
			expense: {
				id: uuidv4(),
				comment: comment,
				amount: parseInt(amount),
			}
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: data,
		});

		setComment('');
		setAmount('');
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
					<label htmlFor='name'>Amount</label>
					<input
						required='required'
						type='number'
						className='form-control'
						id='amount'
						value={amount}
						onChange={(event) => setAmount(event.target.value)}
					/>
				</div>
				<div className='col-sm col-lg-4'>
					<label htmlFor='amount'>Comment</label>
					<input
						required='required'
						type='textarea'
						className='form-control'
						id='comment'
						value={comment}
						onChange={(event) => setComment(event.target.value)}
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
