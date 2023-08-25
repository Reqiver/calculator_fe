import React, {useContext, useState} from 'react';

import {Accordion} from "react-bootstrap";
import EditCategoryBudget from "./EditCategoryBudget";
import ViewCategoryBudget from "./ViewCategoryBudget";
import ExpenseItem from "./ExpenseItem";
import AddExpenseForm from "./AddExpenseForm";
import { AppContext } from "../context/AppContext";

const CategoryItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const { dispatch } = useContext(AppContext);
    const handleEditClick = () => {
        setIsEditing((prev) => !prev);
    };
    const handleSaveClick = (name, amount) => {
        const category = {
			id: props.expense.id,
			name: name,
			budget: parseInt(amount),
		};
        dispatch({
			type: 'EDIT_CATEGORY',
			payload: category,
		});
        setIsEditing(false);
    };
    const amount = props.expense.details.reduce((accumulator, el) => {
        return accumulator + el.amount
    }, 0)

    return (
        <div className='row mb-3 mx-0 d-flex justify-content-between'>
        <Accordion.Item eventKey={props.expense.id} className='col-9 p-0'>
            <Accordion.Header>
                {isEditing ? (
                    <EditCategoryBudget handleSaveClick={handleSaveClick}
                                        budget={props.expense.budget}
                                        name={props.expense.name}/>
                ) : (

                    <ViewCategoryBudget budget={props.expense.budget}
                                        name={props.expense.name} amount={amount}/>

                )}
            </Accordion.Header>
            <Accordion.Body>
                <ul className='list-group mt-3 mb-3'>
                    {props.expense.details.map((detail) => (
                        <ExpenseItem
                            id={detail.id}
                            key={detail.id}
                            name={detail.comment}
                            amount={detail.amount}
                            categoryId={props.expense.id}
                        />
                    ))}
                </ul>
            </Accordion.Body>
        </Accordion.Item>
        <button type='button' className='btn btn-primary edit-btn col-2 mx-1' onClick={handleEditClick}>✏️</button>
        <button type='button' className='btn btn-success edit-btn col mt-1' onClick={() => setModalShow(true)}>
            +
        </button>
        <AddExpenseForm categoryId={props.expense.id} show={modalShow} onHide={() => setModalShow(false)} />
    </div>

    );
};

export default CategoryItem;
