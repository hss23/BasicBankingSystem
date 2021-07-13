import React from 'react';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Customer = () => {
    const sender = useSelector(state => state.transfer.sender)
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <div className={"flex flex-col justify-center w-1/2"}>
                    <h1 className="p-2 text-3xl">Confirm Sender</h1>

                    <div className={"flex flex-col p-2 rounded-lg bg-gray-400 text-white m-2"}>
                        <h3>UserName:</h3>
                        <p>{sender.username}</p>
                    </div>
                    <div className={"flex flex-col p-2 rounded-lg bg-gray-400 text-white m-2"}>
                        <h3>Email</h3>
                        <p>{sender.email}</p>
                    </div>
                    <div className={"flex flex-col p-2 rounded-lg bg-gray-400 text-white m-2"}>
                        <h3>Mobile Number</h3>
                        <p>{sender.mobileNumber}</p>
                    </div>
                    <div className={"flex flex-col p-2 rounded-lg bg-gray-400 text-white m-2"}>
                        <h3 className="text-xl">Current Balance:</h3>
                        <p className="text-md ">{sender.currentBalance}</p>
                    </div>
                </div>
                <div className={"p-2"}>
                    <NavLink to="/receiver" className={"btn bg-green-500 hover:bg-green-700 rounded-lg my-3 mx-2 p-3"}>
                        Proceed
                    </NavLink>
                    <NavLink to="/customers" className={"btn bg-red-500 hover:bg-red-700 rounded-lg my-3 mx-2 p-3"}>
                        Go Back
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Customer;