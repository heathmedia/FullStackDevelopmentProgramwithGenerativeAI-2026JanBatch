import { useSelector } from "react-redux";

function FirstComponent() {
let n = useSelector(gs=>gs.n)

    return(
        <div>
            <h2>First Component</h2>
            <p>Global State variable part of store {n}</p>
        </div>
    )
}

export default FirstComponent;