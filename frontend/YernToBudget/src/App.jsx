import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/transactions/')
            .then(response => {
                setTransactions(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the transactions!', error);
            });
    }, []);

    return (
        <div>
            <h1>Financial Tracker</h1>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        {transaction.date} - {transaction.description} - ${transaction.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
