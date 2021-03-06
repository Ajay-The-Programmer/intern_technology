import React from "react"

export const myActionCreationName=(name:string)=>{

    return{
        type: 'CHANGE_NAME', payload: name
    }

}