import { useDispatch } from "react-redux";

function DecrementN() {

let dispatch = useDispatch();

let decrementValue = ()=> {
    //alert("event called inside a component")
   // dispatch(); // calling reducer function part of reducer file. without action. 
   dispatch({type:"DECREMENT"});    // action object with type of action is INCREMENT. 
}
    return(
        <div>
            <h2>Decrement N Value</h2>
            <input type="button" value="Decrement"
            onClick={decrementValue}/>
        </div>
    )

}

export default DecrementN;