import axios from "axios";
import { useEffect, useState } from "react";
function EmployeeView() {

let [employee,setEmployee]=useState({});
let EMPLOYEE_URL="http://localhost:3000/employees";
useEffect(()=> {
    viewEmployees();

},[])
let viewEmployees = async()=> {   
    let allEmployees = await axios.get(EMPLOYEE_URL);
    let emailId = sessionStorage.getItem("emailId");
    let employeeInfo = allEmployees.data.find(employee=>employee.emailId===emailId);
    setEmployee(employeeInfo);
}
    return(
        <>
            <h3>Your profile info</h3>
            <div>
                EmailId     : {employee.emailId}
                Age         : {employee.age}
                Department  : {employee.department}
            </div>        
            </>
    )
}

export default EmployeeView;