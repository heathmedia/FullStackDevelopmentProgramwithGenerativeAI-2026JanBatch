import { useState } from "react";

function FunctionStyleComponent() {
let name = "Function Style Component";  // normal variable part of function not react component
let [msg,setMsg]=useState("Welcome to React JS");   // state variable like this.state part of constructor in class component and setMsg is like this.setState method in class component
// 1st parameter is variable name and 2nd parameter is method to update the state variable
let changeMsg = () => {
    console.log("Message before change : ", msg);
    //msg = "Welcome to React JS once again";   // normal variable change but it will not reflect in UI because it is not part of react component
    setMsg("Welcome to React JS once again");   // method to update the state variable equal to setState in class component
    console.log("Message after change : ", msg);
}
// no re-render or return once you do changes on normal variable 
let changeName = () => {
    console.log("Name before change : ", name);
    name = "Function Style Component once again";
    console.log("Name after change : ", name);
}
    return(
        <div>
            <h3>Function Style Component</h3>
            <p>State variable : {msg}</p>
            <p>Normal variable : {name}</p>
            <button onClick={changeMsg}>Change Message</button>
            <button onClick={changeName}>Change Name</button> 
        </div>
    )
}

export default FunctionStyleComponent;