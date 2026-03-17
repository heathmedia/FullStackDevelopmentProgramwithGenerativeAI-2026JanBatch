import { createContext} from "react";
const AuthContext = createContext();


export default AuthContext;

// function AuthProvider(props){
//  const [user,setUser]=useState({emailId:"",password:""});

//    let login = (user)=> {
//         setUser(user);
//    }
   
//    let logout = () => {
//     setUser({emailId:"",password:""})
//    }

//    return(
//     <AuthContext.Provider value={{user,login,logout}}>
//         {props.children}
//     </AuthContext.Provider>
//    )
// }

// export default AuthProvider;
/*
    <MyContext.Provider value={pname}>

    </MyContext.Provider>
*/