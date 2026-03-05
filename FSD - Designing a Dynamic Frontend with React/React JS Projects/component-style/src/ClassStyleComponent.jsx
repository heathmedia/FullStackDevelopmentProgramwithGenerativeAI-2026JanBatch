import { Component } from "react";
class ClassStyleComponent extends Component{    // inheritance 
    constructor() {
        super();    // calling parent class constructor 
            this.name= "Steven";    // normal variable part of class not react component
            this.state = {msg: "Class Style Component"}   // state variable  
    }
    changeMsg = () => {
       // console.log("Message before change : ", this.state.msg);
       // this.state.msg = "Welcome to React JS";   // normal variable change but it will not reflect in UI because it is not part of react component
       //console.log("Message after change : ", this.state.msg);
        this.setState({msg: "Welcome to React JS"})   // method to update the state variable
    }
    changeName = ()=> {
        console.log("Name before change : ", this.name);
        this.name = "Bruce";
        console.log("Name after change : ", this.name);
    }
    //return <h1>Welcome</h1>
    // if we do changes in normal variable 
    // then it will not reflect in UI because 
    // it is not part of react component but if
    //  we do changes in state variable then it will reflect in UI because it is part of react component
    render(){   // method which returns the JSX
        return(
            <div>
                <h3>Class Style Component</h3>
                <p>State variable : {this.state.msg}</p>
                <p>Normal variable : {this.name}</p>
                <button onClick={this.changeMsg}>Change Message</button>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}
export default ClassStyleComponent;