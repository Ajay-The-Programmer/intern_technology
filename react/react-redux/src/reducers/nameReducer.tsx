

const nameReducer = (state = ' ', action: any) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            return action.payload
        }
        default:
            return state;
    }

}
export default nameReducer;
