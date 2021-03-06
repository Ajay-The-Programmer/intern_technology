

// export const myActionCreationName=(name:string)=>{

//     return{
//         type: 'CHANGE_NAME', payload: name
//     }

// }
export const myActionCreationName = () => {

    return (dispatch: any) => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res2 => {
                dispatch({ type: 'CHANGE_NAME', payload: res2[0].name })
            })
    }

}