import React, { createContext, useReducer, useEffect } from 'react';
import moment from "moment";
import axios from "axios";

const updateDB = async (data = null) => {
	const date= moment().format('YYYYMM');
	console.log(date)

	const rawBody = {"date": date}

	if (data && 'budget' in data) {
		rawBody['data'] = data
	}

	const responseData = await axios.post(
		'https://s9gw00n2ri.execute-api.eu-north-1.amazonaws.com/serverlessAppFunc', rawBody)
  	.then(function (response) {
    	console.log(response.data);
		return response.data
  	})
		.catch(function (error) {
		console.log(error);
	  });
	return responseData
}


// 5. The reduceer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
	let newState = state;
	let oldExpense
	let oldDetails
	switch (action.type) {
		case 'INITIALIZE':
			newState = action.payload
			break;
		case 'ADD_CATEGORY':
			oldExpense = state?.expenses || [];
			newState = {
				...state,
				expenses: [...oldExpense, action.payload],
			};
			break;
		case 'ADD_EXPENSE':
			const category = state.expenses.find(el => el.id === action.payload.category_id)
			if (category.details?.some(el => el.id === action.payload.expense.id)) {
				return state
			}
			oldDetails = category?.details || [];
			category.details = [action.payload.expense, ...oldDetails]
			newState = {
				...state,
				expenses: [...state.expenses],
			};
			break;
		case 'DELETE_EXPENSE':
			const categoryDeleteExtense = state.expenses.find(el => el.id === action.payload.categoryId)
			categoryDeleteExtense.details = categoryDeleteExtense.details.filter(
					(expense) => expense.id !== action.payload.id
				)
			newState = {
				...state,
				expenses: [...state.expenses],
			};
			break;
		case 'SET_BUDGET':
			newState = {
				...state,
				budget: action.payload,
			};
			break;
		case 'EDIT_CATEGORY':
			newState = {...state, expenses: [...state.expenses]}
			const editCategory = newState.expenses.find(el => el.id === action.payload.id)
			editCategory.name = action.payload.name
			editCategory.budget = action.payload.budget
			break;

		default:
			return state;
	}
	if (action.type !== 'INITIALIZE' && state !== newState){
		console.log(3333333, newState)
		updateDB(newState);
	}
	return newState
};

const initialState = {
	budget: 0,
	expenses: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	useEffect(() => {
		const updateData = async () => {
			const data = await updateDB();
			dispatch({
				type: 'INITIALIZE',
				payload: data?.data
			});
		}
		updateData().catch(console.error)
	}, [])

	return (
		<AppContext.Provider
			value={{
				expenses: state?.expenses || [],
				budget: state?.budget || 0,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
