import React, { useReducer, createContext } from "react";

import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [[{"amount":50,"category":"Clothes","type":"Expense","date":"2021-03-12","id":"e04d84a4-0b73-42ea-86a8-4623ce9f59e3"},{"amount":100,"category":"Business","type":"Income","date":"2021-03-12","id":"c7ba5233-c403-4bdc-b8c6-7200f76491a5"}]];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id});
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction});
    }

    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    }, 0);

    return (
        <ExpenseTrackerContext.Provider
            value={{ deleteTransaction, addTransaction, transactions, balance }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}