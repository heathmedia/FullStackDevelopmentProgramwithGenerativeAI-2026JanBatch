import { useDispatch } from "react-redux";

function IncrementN() {

let dispatch = useDispatch();

let incrementValue = ()=> {
    //alert("event called inside a component")
   // dispatch(); // calling reducer function part of reducer file. without action. 
   dispatch({type:"INCREMENT"});    // action object with type of action is INCREMENT. 
}
    return(
        <div>
            <h2>Increment N Value</h2>
            <input type="button" value="Increment"
            onClick={incrementValue}/>
        </div>
    )

}

export default IncrementN;