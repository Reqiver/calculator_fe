import React, {useContext, useState} from 'react';
import moment from "moment/moment";
import {AppContext} from "../context/AppContext";

const Header = (props) => {
	const { dispatch } = useContext(AppContext);
	const [ date, setDate ] = useState(moment().format('MMYYYY'))
	const handleNextClick = (value) => {
		const nextDate = moment(date, 'MMYYYY').add(1, 'months').format('MMYYYY');
		dispatch({
			type: 'NEXT_MONTH',
			payload: nextDate,
		});
		setDate(nextDate);
	};

	const handlePrevClick = (value) => {
		const prevDate = moment(date, 'MMYYYY').subtract(1, 'months').format('MMYYYY');
		dispatch({
			type: 'PREV_MONTH',
			payload: prevDate,
		});
		setDate(prevDate);

	};

	return (
		<h3 className='mt-4 d-flex justify-content-between align-items-center my-5'>
			<button type="button" className="btn btn-outline-warning" onClick={handlePrevClick}>Prev</button>
				{ moment(date, 'MMYYYY').format('MMMM') }
			<button type="button" className="btn btn-outline-success" onClick={handleNextClick}>Next</button>
		</h3>
);
};

export default Header;
