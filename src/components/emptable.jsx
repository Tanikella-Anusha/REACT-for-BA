//to access the table that is in home 
//so we dont need to create state obj, so fucntional component is enough

//const EmpTable = (props) => {//using props we can access the data that is in other component
//{this.props.employees(this employyes this var name specified in home)/map}
//while not using props below also refering with prop.employees isnt neeeded

/*
// Option 1
const EmpTable = (props) => {
   return(
       <div>
          {props.employees.map()}
       </div>
   )
}
// Option 2
const EmpTable = ({employees, employee, count}) => {
   return(
       <div>
          {employees.map()}
       </div>
   )
}
// Option 3
const EmpTable = (props) => {
    const {employees, employee, count} = props;
   return(
       <div>
          {employees.map()}
       </div>
   )
}
*/
import React from "react";

//const EmpTable = (props) => {

//const EmpTable = ({ employees }) => {
const EmpTable = (props) => {
  const { employees, count, employee } = props;
  return (
    <div>
      <table className="table table-dark table-striped w-50 mx-auto">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr>
              <td>{emp.empId}</td>
              <td>{emp.empName}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;
