import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
const [emailId,setEmailId]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");
const navigate = useNavigate();
// in memory DB. 
let userDb =[
    {emailId:"raj@gmail.com",password:"raj@123"},
    {emailId:"steven@gmail.com",password:"steven@123"},
    {emailId:"bob@gmail.com",password:"bob@123"},
    {emailId:"ajay@gmail.com",password:"ajay@123"}
]
let handleSubmit  = (event)=> {
    event.preventDefault();
    setError("");
    if(emailId.length===0 || password.length==0){
        setError("All field required")
        return;
    }
    // check with single user 
    // if(emailId==="admin@gmail.com" && password==="123"){
    //         alert("successfully login")
    //         navigate("/home");
    // }else {
    //     setError("EmailId or password is wrong")
    // }

    // check with multi users 

    let result = userDb.find(user=>user.emailId===emailId && user.password===password);
    if(result!=undefined){
        alert("successfully login")
        sessionStorage.setItem("user",result.emailId);
        navigate("/home");
    }else {
        setError("EmailId or password is wrong")
    }
    setEmailId("")
    setPassword("");
}
    return(
        <div>
            <h2>Login Component</h2>
            <span style={{"color":"red"}}>{error}</span>
            <form onSubmit={handleSubmit}>
                <input type="email" name="emailId"
                placeholder="Enter Your emailId" value={emailId}
                onChange={(event)=>setEmailId(event.target.value)}/><br/>
                <input type="password" name="password" value={password}
                placeholder="Enter Your password" 
                onChange={(event)=>setPassword(event.target.value)}/><br/>
                <input type="submit" value="SignIn"/>
            </form>
        </div>
    )
}
export default Login;