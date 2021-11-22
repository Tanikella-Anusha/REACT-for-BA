import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Student extends React.Component {
    state={
        students:[],
        student:{
            fullName:"",
            contactNo:"",
            email:"",
            password:"",
            role:"",

        },
    };
    componentDidMount()
    {
        axios.get("localhost:8080/students")
        .then(res=>{
            console.log(res);
            this.setState({students:res.data});
        })
        .catch(error=>console.log(error));
    }

    handleDelete=(id) =>{
        axios.delete(`http://localhost:8080//students/${id}`).then((res)=>{
            const students=this.state.students.filter((std) =>std.rollNo != id);
            this.setState({students:students})
        })
    }
    render() { 
    return <div className="container">
        
         <Link to="/students/add" 
         className="btn btn-secondary btn-large mb-1" >
         Add
         </Link>
        <table className=" w-50 mx-auto">
        
            <thead>
                <tr>
                    <th>RollNo</th>
                    <th>FullName</th>
                    <th>ContactNo</th>
                    <th colspan="2">Actions</th>
                    <td>
                        <Link to={'/students/update/${student/rollNo}' }/>
                    </td>
                    
                </tr>
            </thead>

        <tbody>
           { this.state.students.map((student) => (
            <tr>
                <td>{student.rollNo}</td>
                <td>{student.fullName}</td>
                <td>{student.contactNo}</td>
                <td>
                    <input type="button" value="Update" className="btn btn-secondary me-3" />

                </td>
                <td>
                    <input type="button" value="Delete" className="btn btn-outline-danger me-3"
                    onClick= {() => this.handleDelete(student.rollNo)}
                    />
                    
                </td>
            </tr>
            ))}
        </tbody>
        </table>
        
    </div>;
    }
}
 
export default Student;
