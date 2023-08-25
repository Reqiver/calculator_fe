import React, { useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	return (
		<form onSubmit={() => props.handleSaveClick(value)} className='w-100 row d-flex justify-content-between'>
			<div className='p-1 col-8'>
		<input
			required='required'
			type='number'
			className='form-control mr-3'
			id='name'
			value={value}
			onChange={(event) => setValue(event.target.value)}
		/>
				</div>
		<button
			type='submit'
			className='btn btn-primary col-3 m-1'
		>
			Save
		</button>
		</form>
	);
};

export default EditBudget;
