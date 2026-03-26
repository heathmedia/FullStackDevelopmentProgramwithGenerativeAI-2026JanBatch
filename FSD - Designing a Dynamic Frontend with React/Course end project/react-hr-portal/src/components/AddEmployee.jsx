import axios from "axios";
import { useState } from "react";
function AddEmployee() {
let [emailId,setEmailId]=useState("");
let [department,setDepartment]=useState("");
let EMPLOYEE_URL="http://localhost:3000/employees";
let addEmployee = async(event)=> {
    event.preventDefault();
    let newEmployee = {emailId,department};
    let allEmployees = await axios.get(EMPLOYEE_URL);
    let employeePresent = allEmployees.data.find(employee=>employee.emailId==newEmployee.emailId);
    if(employeePresent==undefined){
    await axios.post(EMPLOYEE_URL,newEmployee);
    alert("Employee added successfully")
    }else {
        alert("Employee already present");
    }
    setEmailId("");
    setDepartment("");
}
    return(
        <>
            <h3>Add Employee</h3>
            <form onSubmit={addEmployee}>
            <label>EmailId</label>
            <input type="email" name="emailId" value={emailId}
            onChange={(event)=>setEmailId(event.target.value)}/><br/>


            <label>Department</label>
            <input type="text" name="department" value={department}
            onChange={(event)=>setDepartment(event.target.value)}/><br/>


            <input type="submit" value="Add Employee"/>
            </form>
        </>
    )
}

export default AddEmployee;