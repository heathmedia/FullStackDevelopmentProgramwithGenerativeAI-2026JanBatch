import { useState } from "react";
import DisplayUserInOrderList from "./DisplayUserInOrderList";
import DisplayUserInUnOrderList from "./DisplayUserInUnorderList";
function AddUsers() {
const [user,setUser]=useState("");
const [users,setUsers]=useState([]);
const [flag,setFlag]=useState(true);
const [buttonValue,setButtonValue]=useState("Order List")
let addUser = ()=> {
    // creating new array with 1 parameter is old array data ie users 
    // user new names 
    setUsers([...users,user]);
    setUser("")
    alert("user added...")
}
let toggleUserFormat = ()=> {
    if(buttonValue=="Order List"){
        setButtonValue("UnOrder List")
        setFlag(false)
    }else {
        setButtonValue("Order List")
        setFlag(true)
    }
}
    return(
        <div>
            <h3>Add User</h3>
            <input type="text" name="user" placeholder="Enter user name"
            onChange={(event)=>setUser(event.target.value)} value={user}/>
            <input type="button" value="Add User" onClick={addUser}/>
            <br/>
            <input type="button" value={buttonValue} onClick={toggleUserFormat}/>
            {
                flag?
                <DisplayUserInOrderList userData={users}></DisplayUserInOrderList>
                : <DisplayUserInUnOrderList userData={users}></DisplayUserInUnOrderList>
            }
        </div>
    )
}

export default AddUsers;