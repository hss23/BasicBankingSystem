import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';
import useComponentWilllMount from 'component-will-mount-hook'

const Accounts = () => {
    const dispatch = useDispatch();
    useComponentWilllMount(() => {
        dispatch(actions.getAllUsers());
        dispatch({ type: actionTypes.TRANSFER_COMPLETE });
    });
    const users = useSelector(state => state.user.users)

    return (
        <div className="container py-4">
            <h1 className="text-3xl p-4">All Accounts Details</h1>
            <div className="flex justify-center">
            <table className={'w-4/6'}>
            <thead>
                <th>Sl No</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Current Balance</th>
            </thead>
            <tbody>
            {users.map((user, index) => (
            <tr>
            <td>{index}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.mobileNumber}</td>
            <td>{user.currentBalance}</td>
            </tr>
            ))}
            </tbody>
            </table>
            </div>
        </div>
    );
}


export default Accounts;