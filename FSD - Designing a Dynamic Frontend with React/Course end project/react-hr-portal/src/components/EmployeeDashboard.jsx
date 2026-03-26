import { Link, Outlet, useNavigate } from "react-router-dom";

function EmployeeDashboard() {

let emailId = sessionStorage.getItem("emailId");

let navigate = useNavigate();
let logout = ()=> { 
    sessionStorage.removeItem("emailId");
    navigate("/");
}
    return(
        <>
            <h3>Welcome to Home Page by User {emailId}</h3>


            <input type="button" value="logout" onClick={logout}/>

            <br/>
            <Link to="viewEmployee">View Profile</Link>
            <hr/>
            <Outlet/>
        </>
    )
}

export default EmployeeDashboard;