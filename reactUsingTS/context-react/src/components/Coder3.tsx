import React, { useContext } from 'react';
import { AgeContext,NameContext} from './CreateContext';

export const Coder3 = (props:any) => {

  const coder3 = useContext(NameContext)
  // const age = useContext(AgeContext)

  return (

    <React.Fragment>
      <h3>i am coder3</h3>
      <h2>{coder3.name}</h2>
    </React.Fragment>

  )

}