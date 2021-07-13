import React from 'react';
import classes from './Customer.module.css';

import { NavLink } from 'react-router-dom';

const Customer = (props) => {
    return (
        <tr className="my-2 p-2">
            <td>{props.index}</td>
            <thead> {props.user.username}</thead>
            <td>{props.user.email}</td>
            <td>{props.user.mobileNumber}</td>
            <td>{props.user.currentBalance}</td>
            <NavLink to={props.link} onClick={props.clik} className={"bg-white border-l-2 hover:bg-blue-400 rounded-xl"}>
                <td>Transfer</td>
            </NavLink>
        </tr>
    );
}

export default Customer;