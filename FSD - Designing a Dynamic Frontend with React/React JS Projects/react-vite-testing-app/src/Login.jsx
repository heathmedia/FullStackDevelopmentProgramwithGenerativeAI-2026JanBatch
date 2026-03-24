import { useState } from "react";

function Login() {
const [emailId,setEmailId]=useState("");
const [password,setPassword]=useState("");
const [message,setMessage]=useState("");


let handleSubmit = (event)=> {
    event.preventDefault();

    if(emailId.length==0 || password.length==0){
        setMessage("All field required")
        return;
    }

    if(emailId==="admin@gmail.com" && password==="admin@123"){
        setMessage("successfully login")
    }else {
        setMessage("InValid EmailId or Password");
    }
}
    return(
        <>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                
                <input type="email" name="emailId" value={emailId}
                onChange={(event)=>setEmailId(event.target.value)} placeholder="Enter emailId"/><br/>

                <input type="password" name="password" value={password}
                onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password"/><br/>

                <button type="submit">Login</button>
            </form>
            <span>{message}</span>
        </>
    )


}

export default Login;