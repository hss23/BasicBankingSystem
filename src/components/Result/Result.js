import React from 'react';
import classes from './Result.module.css';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Result = () => {
    const transfer = useSelector(state => state.transfer.transfer)
    return (
        <div className={"container w-4/6 flex flex-col items-center mx-auto"}>
            <img className="h-1/2 w-1/2" alt="success" src={transfer ? "/success1.jpg" : "/fail.jpg"} />
            <h3>Transfer {transfer ? "Successful" : "Failed"}</h3>
            <NavLink to="/">
                <button className="bg-green-500 hover:bg-green-700 p-4 rounded-xl">Go back to Home</button>
            </NavLink>
        </div>
    );
}

export default Result;