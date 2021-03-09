

export const iState = {

    name: "Ajay",
    wish: ['eat', 'tracking', 'code']

}
export const Reducer = (state: any, action: any) => {


    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }


        default:
            return state;
    }

}