import { Link, Outlet, useNavigate } from "react-router-dom";

function HrDashboard() {

let navigate = useNavigate();

let logout = ()=> {
    navigate("/")
}

    return(
        <>
            <div>   <h3>Hr Home Page</h3>

                <input type="button" value="logout" onClick={logout}/>
                <br/>
                <Link to="addEmployee">Add Employee</Link> |
                <Link to="viewEmployees">View Employees</Link> |
                <hr/>

                <Outlet/>

            </div>
        </>
    )
}

export default HrDashboard;