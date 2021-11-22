import React, {Component} from "react";
import EmpTable from "./emptable";

//class component
class Home extends React.Component
{
    state={
        count:0,
        employee:{
            empId:1001,
            empName:"Ram",
            salary:23000
        },
        employees:[
            {
                empId:1002,
                empName:"Sam",
                salary:21000
            },
            {
                empId:1003,
                empName:"Tom",
                salary:43000
            },
            {
                empId:1004,
                empName:"Fam",
                salary:32000
            },
            {
                empId:1005,
                empName:"Don",
                salary:43000
            }
        ]
    }
    render()
    {
        return <div>
           
            <EmpTable 
            employees={this.state.employees}
             count={this.state.count} 
             employee={this.state.employee}/>
            
        </div>
    }
}
        
export default Home;