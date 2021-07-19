import React from 'react';
import { useSelector } from 'react-redux';
import Transaction from './Transaction/Transaction';


const Transactions = () => {

    const transactions = useSelector(state => state.transaction.transactions)

    return (
        <div className="container py-4">
            <h1 className="text-2xl font-bold p-4">Transactions</h1>
            {/* <div className={classes.custRow}>
                <p>Sl No</p>
                <p>Sender</p>
                <p>Receiver</p>
                <p>Amount</p>
                <p>State</p>
            </div> */}
            <div className="flex justify-center">
                <table className="w-4/6">
                    <thead>
                        <th>Sl No</th>
                        <th>Sender</th>
                        <th>Receiver</th>
                        <th>Amount</th>
                        <th>State</th>
                    </thead>
                    <tbody>
                        {Object.keys(transactions).map((transaction, index) => (
                            <Transaction transaction={transactions[transaction]}
                                key={'_' + Math.random().toString(36).substr(2, 9)}
                                index={index + 1} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Transactions;