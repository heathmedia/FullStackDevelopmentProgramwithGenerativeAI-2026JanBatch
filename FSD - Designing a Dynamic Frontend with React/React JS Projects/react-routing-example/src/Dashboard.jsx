import { useNavigate } from "react-router-dom";

function Dashboard() {


let navigate = useNavigate();
let userEmailId = sessionStorage.getItem("user");
let logout = ()=> {
    sessionStorage.removeItem("user");
    navigate("/");
}
    return(
        <div>
            <h2>Welcome to Dashboard user {userEmailId}</h2>
            <input type="button" value="logout" onClick={logout}/>
        </div>
    )
}
export default Dashboard;