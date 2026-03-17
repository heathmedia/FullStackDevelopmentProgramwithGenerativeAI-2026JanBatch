import Child11 from "./Child11";
import Child12 from "./Child12";

function Child9(props) {
    return(
        <div>
            <h2>Child9 Component </h2>
            <Child12></Child12>
            <Child11 pname={props.pname}></Child11>
        </div>
    )
}
export default Child9;