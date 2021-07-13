import React, { useState } from 'react';
import classes from './Transfer.module.css';

import { connect, useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';

import { toast } from 'react-toastify';

const Transfer = () => {
    const [amount, setamount] = useState("")
    const sender = useSelector(state => state.transfer.sender)
    const receiver = useSelector(state => state.transfer.receiver)
    const dispatch = useDispatch()
    const balanceUpdates = () => {
        const pattern = /^\d+$/;

        if (!pattern.test(amount)) {
            toast.error("Invalid amount");
            const tData = {
                sender: sender.email,
                receiver: receiver.email,
                amount: parseInt(amount),
                state: "failure"
            }
            dispatch(actions.addTransaction(tData))
        } else if (amount > sender.currentBalance) {
            toast.error("Transfer amount larger than sender balance");
            const tData = {
                sender: sender.email,
                receiver: receiver.email,
                amount: parseInt(amount),
                state: "failure"
            }
            dispatch(actions.addTransaction(tData))
        } else {
            dispatch({ type: actionTypes.TRANSFER_SUCCESS })
            const sData = {
                ...sender,
                currentBalance: parseInt(sender.currentBalance) - parseInt(amount)
            };
            const rData = {
                ...receiver,
                currentBalance: parseInt(receiver.currentBalance) + parseInt(amount)
            }
            dispatch(actions.updateBalances(sData, rData))
            const tData = {
                sender: sData.email,
                receiver: rData.email,
                amount: parseInt(amount),
                state: "success"
            }
            dispatch(actions.addTransaction(tData))
        }
    }
    return (
        <div className="container w-4/6 mx-auto">
            <div className={"w-max-4/6 shadow rounded-2xl bg-white py-4"}>
                <h1>Transfer Form</h1>
                <form className={classes.transferForm}>
                    <div className={classes.formRow}>
                        <input type="text" disabled name="sender"
                            value={"Sender :: " + sender.username} />
                        <input type="text" disabled
                            value={"Balance :: " + sender.currentBalance} />
                    </div>
                    <div className={classes.formRow}>
                        <input type="text" disabled name="receiver"
                            value={"Receiver :: " + receiver.username} />
                        <input type="text" disabled
                            value={"Balance :: " + receiver.currentBalance} />
                    </div>
                    <input type="text" placeholder="Transfer Amount"
                        value={amount}
                        onChange={(e) => setamount(e.target.value)}
                        className={classes.amountInput} />
                    <div className={classes.btnGroup}>
                        <NavLink to="/result">
                            <button onClick={balanceUpdates} className="btn btn-success">Transfer</button>
                        </NavLink>
                        <NavLink to="/">
                            <button className="btn btn-danger">Cancel</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Transfer;