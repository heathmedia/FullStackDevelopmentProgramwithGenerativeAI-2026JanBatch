import { useState } from "react";
import { useSelector } from "react-redux"
import FirstComponent from "./FirstComponent";
import IncrementN from "./IncrementN";
import DecrementN from "./DecrementN";

function App() {

let fname = useSelector(gs=>gs.name);   // global state variable. 
let [msg,setMsg]=useState("React with Redux");// msg is local variable. 
  return (
    <>
      <h2>Local State Variable : {msg}</h2>
      <p>Global State variable : {fname}</p>
      <FirstComponent></FirstComponent>
      <IncrementN></IncrementN>
      <DecrementN></DecrementN>
    </>
  )
}

export default App
