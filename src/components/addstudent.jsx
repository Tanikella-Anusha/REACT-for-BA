import axios from "axios";
import React, { Component } from "react";
import Student from "./student";

class AddStudent extends React.Component {
    state={
        students:[],
        student:{
            fullName:"",
            contactNo:"9999999",
            email:"",
            password:"",
            role:"Admin",

        },
    };
    handleChange= (event) =>{
        const student={...this.state.student};//copying student object
        Student[event.target.name]=event.target.value;//student[fullName]="AB"
        //student[rollno]=1;
        
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({ Student : Student} );
    };
    handleSubmit=(event) =>{
        event.preventDefault();
        console.log("HandleSubmit")
        const student={
            contactNo:this.state.student.contactNo,
            fullName:this.state.student.fullName,
            login:{
                email:this.state.student.email,
                password:this.state.student.password,
                role:this.state.student.role,

            },
            rollNo:0,
        };
        axios.post("http://localhost:8080/students",student)
        .then((res) =>{
            this.props.history.push("/student");
        })
        .catch((err) => console.log(err));
    };
  //value={this.state.student.contactNo}  
  render() {
    return (
      <div>
        <h3>Register Form</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.student.fullName}
              name="fullName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              Contact No
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputContactNo"
              aria-describedby="emailHelp"
              value={this.state.student.contactNo}
              name="contactNo"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.student.email}
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.student.password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.student.role}
            name="role"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
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

export default AddStudent;
