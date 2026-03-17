import { useState } from "react"
import AuthContext from "./AuthContext"
import Dashboard from "./Dashboard"
import Header from "./Header"
import Login from "./Login"

function App() {
const [msg,setMsg]=useState("Welcome to React JS Context API")
const [user,setUser]=useState({emailId:"",password:""});

  let login = (user)=> {
        setUser(user);
   }
   
   let logout = () => {
    setUser({emailId:"",password:""})
   }
  return (
    <>
  <AuthContext.Provider value={{msg,user,login,logout}}>
      <Header></Header>
      <Login></Login>
      <Dashboard></Dashboard>
  </AuthContext.Provider>
    </>
  )
}

export default App
