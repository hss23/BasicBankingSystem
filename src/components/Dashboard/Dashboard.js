import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import photo from '../../images/2311974.jpg';
const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getTransactions());
    }, [dispatch])
    return (
        <div className={"container w-full"}>
            <div className="bg-gray-500 text-left">
                <NavLink to="/" className="text-xl no-underline text-white">Home
                </NavLink>
            </div>
            <div className="justify-center">
                <p className={"text-white text-3xl font-weight-bold my-3"}>Create Simple Transactions</p>
            </div>
            <img src={photo} className="w-1/2 h-1/2 mx-auto" />
            <div className="flex justify-center">
                <NavLink to="/customers" className={"btn bg-green-500 hover:bg-green-700 rounded-lg my-3 mx-2 p-3"}>
                    Transfer Money
                </NavLink>
                <NavLink to="/allaccounts" className={"btn bg-green-500 hover:bg-green-700 rounded-lg my-3 mx-2 p-3"}>
                    Accounts
                </NavLink>
                <NavLink to="/transfers" className={"btn bg-green-500 hover:bg-green-700 rounded-lg my-3 mx-2 p-3"}>
                    Transactions History
                </NavLink>
            </div>
        </div>
    );
}

export default Dashboard;