import { useContext, useState } from "react"
import AuthContext from "./AuthContext";

function Login() {
const [emailId,setEmailId]=useState("");
const [password,setPassword]=useState("");

let obj = useContext(AuthContext);

let handleSubmit = (event)=> {
    event.preventDefault();
    if(emailId==="admin@gmail.com" && password==="admin@123"){
        obj.login("admin@gmail.com");   // called context function ie login part of app component 
        alert("successfully login")
    }else {
        alert("Failure try once again")
    }
    setEmailId("")
    setPassword("");
}
    return(
        <div>
            {
                obj.user
                ?
                null
                : 
                (
            <div>   
            <h2>Login Component</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="emailId" placeholder="Enter the EmailId"
                value={emailId} onChange={(event)=>setEmailId(event.target.value)}/><br/>
                <input type="password" name="password" placeholder="Enter the Password"
                value={password} onChange={(event)=>setPassword(event.target.value)}/><br/>
                <input type="submit" value="SignIn"/>
            </form>
                
            </div>

                )

            }     

                

        </div>
    )
}
export default Login