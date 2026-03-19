let initialState = {
    n:100,
    name:"Akash"
}

function reducer(state=initialState,action) {
// base upon the action it will do the changes in state variables. 
    console.log(action)
    if(action.type=="INCREMENT"){
        // copy all other state, n the property want to change, value (static increment by 1)
        return {...state,n:state.n+1}
    }

    if(action.type=="DECREMENT"){
        // copy all other state, n the property want to change, value (static increment by 1)
        return {...state,n:state.n-1}
    }

    return state;
}

export default reducer;