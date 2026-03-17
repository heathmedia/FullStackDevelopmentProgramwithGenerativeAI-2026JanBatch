import { useContext } from "react"
import AuthContext  from "./AuthContext"

function Header() {

let obj = useContext(AuthContext)
    return(
        <div>
            <h2>{obj.msg}</h2>
        </div>
    )
}
export default Header