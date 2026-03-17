import Child4 from "./Child4";

function Child1(props) {
    return(
        <div>
            <h2>Child1 Component </h2>
            <Child4 pname={props.pname}></Child4>
        </div>
    )
}
export default Child1;