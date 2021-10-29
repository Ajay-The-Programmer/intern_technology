import React, { Dispatch } from "react"


interface IContext{

    name:"string",
    dispatchName:Dispatch<any>
  }
  
 export const NameContext = React.createContext({} as IContext)
  
  
export const AgeContext = React.createContext(25)

