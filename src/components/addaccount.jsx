import axios from "axios";
import React, { Component } from "react";
import BankAccount from "./bankaccount";

class AddAccount extends React.Component {

  state={
    bankaccounts:[],
    bankaccount:{
        accountNo:"",
        ifscCode:"",
      
        balance:"",
        bankName:"",

    },
};
handleSubmit=(event) =>{
  event.preventDefault();
  console.log("HandleSubmit")
  const bankaccount={
    accountNo:this.state.bankaccount.accountNo,
    ifscCode:this.state.bankaccount.ifscCode,
    
        balance:this.state.bankaccount.balance,
        bankName:this.state.bankaccount.bankName,
        };
  axios.post("http://localhost:8080/bankaccount",this.state.bankaccount)
  .then((res) =>{
      this.props.history.push("/bankaccount");
  })
  .catch((err) => console.log(err));
};
    
  
  render() {
    return (
      <div className="w-50 mx-auto border mt-5">
        <h3>Bank Account</h3>
        <form className="container">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              AccountNo
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputAccountNo"
              aria-describedby="emailHelp"
             // value={this.state.bankaccount.accountNo}
              name="accountNo"
              //onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              IfscCode
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputCode"
              aria-describedby="emailHelp"
              //value={this.state.bankaccount.ifscCode}
              name="ifscCode"
              //onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Balance
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
             //value={this.state.bankaccount.balance}
              name="balance"
              //onChange={this.handleChange}
            />
          </div>
          
          
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            //value={this.state.bankaccount.bankName}
            name="bankName"
            //onChange={this.handleChange}
          >
            <option selected>Select Bank</option>
            <option value="Axis">Axis</option>
            <option value="HDFC">HDFC</option>
            <option value="Kotak">Kotak</option>
            <option value="SBI">SBI</option>
          </select>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddAccount;