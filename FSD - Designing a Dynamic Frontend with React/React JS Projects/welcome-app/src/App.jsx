
function HeaderComponent() {
  return <h2>This is my Header Component</h2>
}

function FooterComponent() {
  return <h2>This is my Footer Component</h2>
}

function ButtonComponent() {
  return <button>Click Me</button>
}

function EmployeeComponent() {
  let id = 100;       // number type 
  let name = "Akash";       // string type  
  let isActive = true;      // boolean 
  let skillSet = ["Java", "React JS", "Angular", "Node JS"];  // array type 
  return(
    <div>
      <h2>Employee Details</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Active: {isActive ? "Yes" : "No" }</p>  
      <p>Skills: {skillSet.join(", ")}</p>
    </div>
  )
}
function App(){

  //return <div>Welcome to React JS created by Akash</div>
  // return <div>Welcome to React JS</div>
  //       <p>Welcome to React JS once again</p>

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Welcome to React JS</h1>
      <p>Today we are learning React JS</p>
      <EmployeeComponent></EmployeeComponent>
      <ButtonComponent></ButtonComponent>
      <FooterComponent></FooterComponent>
    </div>
  )

}

export default App;