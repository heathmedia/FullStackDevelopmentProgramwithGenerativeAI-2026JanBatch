import { useContext } from "react";
import MyContext from "./Context";

function Child10() {
let parentName = useContext(MyContext)
    return(
        <div>
            <h2>Child10 Component </h2>
            <p>Parent name in child10 component through context api is {parentName}</p>
        </div>
    )
}
export default Child10;