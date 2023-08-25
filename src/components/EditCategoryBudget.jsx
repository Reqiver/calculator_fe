import React, { useState } from 'react';

const EditCategoryBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	const [categoryName, setCategoryName] = useState(props.name);
	const handleSave = () => {
		props.handleSaveClick(categoryName, value)
	}
	return (
		<form onSubmit={handleSave} className='row d-flex justify-content-between w-100'>
			<input
				required='required'
				type='text'
				className='form-control m-1'
				value={categoryName}
				onChange={(event) => setCategoryName(event.target.value)}
			/>
			<input
				required='required'
				type='number'
				className='form-control m-1'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='submit'
				className='btn btn-primary m-1'
			>
				Save
			</button>
		</form>
	);
};

export default EditCategoryBudget;
