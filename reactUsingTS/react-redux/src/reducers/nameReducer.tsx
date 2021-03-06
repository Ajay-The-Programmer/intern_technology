

const nameReducer = (state =null, action:any) => {
    if (action.type==="CHANGE_NAME") {
        return action.payload
    }
    
    return state;
}
export default nameReducer;
