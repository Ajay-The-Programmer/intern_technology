// export const myActionCreationName=(name:string)=>{

//     return{
//         type: 'CHANGE_NAME', payload: name
//     }

// }
export const myActionCreationName = () => {
    return async (dispatch: any) => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const res2 = await data.json();
        
        
        dispatch({ type: "CHANGE_NAME", payload: res2[0].name });
    };
};
export const addWish = () => {
    return {
        type: "ADD_WISH",payload:'code',
    };
};
