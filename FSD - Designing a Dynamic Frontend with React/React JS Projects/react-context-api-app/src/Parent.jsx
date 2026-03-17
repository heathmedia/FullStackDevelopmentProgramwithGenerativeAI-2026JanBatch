import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import MyContext from "./Context";

function Parent() {
let [pname,setPName]=useState("Steven");
    return(
        <div>
            <MyContext.Provider value={pname}>
                <h2>Parent Component </h2>
                <p>Parent name in parent component is {pname}</p>
                <Child1 pname={pname}></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </MyContext.Provider>
        </div>
    )
}
export default Parent;