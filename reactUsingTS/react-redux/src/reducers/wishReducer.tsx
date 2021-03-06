
// const iState = {
//     name: "ajay",
//     wishesh:["eat", "code"]
// }
const wishReducer = (state=[null], action:any) => {
    if (action.type==="CHANGE_WISH") {
        return action.payload
    }
    
    return state;
}
export default wishReducer;
