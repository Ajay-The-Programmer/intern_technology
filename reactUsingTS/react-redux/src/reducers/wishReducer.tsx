
// const iState = {
//     name: "ajay",
//     wishesh:["eat", "code"]
// }
const wishReducer = (state=[''], action:any) => {
    if (action.type==="ADD_WISH") {
        return [action.payload]
    }
    
    return state;
}
export default wishReducer;
