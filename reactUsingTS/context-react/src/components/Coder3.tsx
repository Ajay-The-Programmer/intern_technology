import React, { useContext } from 'react';
import { AgeContext, NameContext } from './CreateContext';

export const Coder3 = () => {

    const name = useContext(NameContext)
    const age = useContext(AgeContext)
  
  
    return (
  
      <React.Fragment>
   
        <h1>My name is :{name}</h1>
        <h2>My age is : {age}</h2>
      </React.Fragment>
  
    )
  
  }