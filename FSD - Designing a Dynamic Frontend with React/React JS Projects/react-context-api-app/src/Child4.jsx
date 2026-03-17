import { useContext } from "react";
import Child8 from "./Child8";
import MyContext from "./Context";

function Child4(props) {
let value = useContext(MyContext);

    return(
        <div>
            <h2>Child4 Component </h2>
            <Child8 pname={props.pname}></Child8>
            <p>Value of pname through context api is in child4 component {value}</p>
        </div>
    )
}
export default Child4;