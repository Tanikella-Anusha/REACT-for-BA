//import React, { Component } from 'react';

import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BankAccount extends React.Component {
    state={
        bankaccounts:[],
        bankaccount:{
            accountNo:"",
            ifscCode:"",
          
            balance:"",
            bankName:"",

        },
    };
    componentDidMount()
    {
        axios.get("localhost:8080/bankaccount")
        .then(res=>{
            console.log(res);
            this.setState({bankaccounts:res.data});
        })
        .catch(err=>console.log(err));
    }
    render() { 
    return <div className="container">
        
         <Link to="/addaccount" 
         className="btn btn-secondary btn-large mb-1" >
         Add
         </Link>
        <table className=" table table-striped table-dark w-50 mx-auto">
        
            <thead>
                <tr>
                    <th>AccountNo</th>
                    <th>IfscCode</th>
                    <th>Balance</th>
                    <th>BankName</th>
                </tr>
            </thead>

        <tbody>
           { this.state.bankaccounts.map((ba) => (
            <tr>
                <td>{ba.accountNo}</td>
                <td>{ba.ifscCode}</td>
                <td>{ba.balance}</td>
                <td>{ba.bankName}</td>
                
            </tr>
            ))}
        </tbody>
        </table>
        
    </div>;
    }
}
 
export default BankAccount;