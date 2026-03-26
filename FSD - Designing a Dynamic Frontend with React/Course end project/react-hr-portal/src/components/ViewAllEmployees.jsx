import axios from "axios";
import { useEffect, useState } from "react";
function ViewAllEmployees() {
let [employees,setEmployees]=useState([]);
let EMPLOYEE_URL="http://localhost:3000/employees";
useEffect(()=> {
    viewEmployees();

},[])
let viewEmployees = async()=> {   
    let allEmployees = await axios.get(EMPLOYEE_URL);
    setEmployees(allEmployees.data);
}
    return(
        <>
            <h3>All Employees Details</h3>
            <table border="1">
                    <thead>
                        <tr>
                            <th>EmailId</th>
                            <th>Department</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map(employee=>
                            <tr key={employee.id}>
                                <td>{employee.emailId}</td>
                                <td>{employee.department}</td>
                            </tr>
                        )}
                    </tbody>
            </table>
        </>
    )
}

export default ViewAllEmployees;