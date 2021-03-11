import React from "react";
import { useEffect, useRef } from "react"

const AppFunction = () => {

    const myName = React.useRef<HTMLHeadingElement>(null);
    const myInput = useRef<HTMLInputElement>(null);

useEffect(()=>{
    console.log(myName.current?.innerText);
    myInput.current?.focus()
    
},[])
    return (

        <div>
            <h3 ref={myName}>Welcome to useRef() Hook in function Component</h3>
            <input type="text" ref={myInput} />

        </div>
        
    )


}
export default AppFunction;