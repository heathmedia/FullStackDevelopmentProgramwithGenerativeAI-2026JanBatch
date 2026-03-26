import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
function SignUp() {
let [emailId,setEmailId]=useState("");
let [department,setDepartment]=useState("");
let [age,setAge]=useState("");
let [password,setPassword]=useState("");
let [id,setId]=useState("");

let [flag,setFlag]=useState(true);
let EMPLOYEE_URL="http://localhost:3000/employees";
let LOGIN_URL="http://localhost:3000/logins";

let verifyEmailId = async(event)=> {
    event.preventDefault();
    let employees = await axios.get(EMPLOYEE_URL);
    let employeePresent = employees.data.find(employee=>employee.emailId===emailId);
    if(employeePresent==undefined){
        alert("You are not a part of organization")
        setEmailId("");
    }else {
        console.log(employeePresent)
        setFlag(false);
        setId(employeePresent.id);
        setDepartment(employeePresent.department);
        setEmailId(employeePresent.emailId);
    }
    
}

let signUp = async (event)=> {
    event.preventDefault();
    let existingEmployee = {emailId,password,department,age};
    let loginDetails = {emailId,password,typeOfUser:"employee"};
    console.log(existingEmployee);
    await axios.patch(EMPLOYEE_URL+"/"+id,existingEmployee);// it update existing employee details 
    // with new property as age and password. 
    await axios.post(LOGIN_URL,loginDetails);
    setFlag(true);
    setEmailId("");
}
    return(
        <>
            <h3>SignUp Page</h3>

            {
                flag
                
                ?
                
                <div>
                    <form onSubmit={verifyEmailId}>
                    <label>Enter registered EmailId</label>
                    <input type="email" name="emailId" value={emailId}
                    onChange={(event)=>setEmailId(event.target.value)}/>
                    <input type="submit" value="Verify EmailId"/>
                    </form>    
                </div>

                :

                <div>
                    
                    <form onSubmit={signUp}>
                    
                    <label>EmailId</label>
                    <input type="email" name="emailId" value={emailId}
                    onChange={(event)=>setEmailId(event.target.value)} readOnly/>

                    <br/>

                    <label>Password</label>
                    <input type="password" name="password" value={password}
                    onChange={(event)=>setPassword(event.target.value)}/>

                    <br/>

                    <label>Department</label>
                    <input type="text" name="department" value={department}
                    onChange={(event)=>setDepartment(event.target.value)} readOnly/>

                    <br/>


                    <label>Age</label>
                    <input type="text" name="age" value={age}
                    onChange={(event)=>setAge(event.target.value)}/>

                    <br/>
                    <input type="submit" value="SignUp"/>
                    </form>    
                </div>
            }
            <Link to="/">SignIn</Link>
        </>
    )
}

export default SignUp;