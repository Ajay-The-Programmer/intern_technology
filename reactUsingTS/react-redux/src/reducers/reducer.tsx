
const iState = {
    name: "ajay",
    wishesh:["eat", "code"]
}
const reducer = (state = iState, action:any) => {
    if (action.type==="CHANGE_NAME") {
        return{
          ...state,
            name:action.payload
        }
    }
    
    return state;
}
export default reducer;
