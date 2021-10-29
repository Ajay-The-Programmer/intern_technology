import React, { useContext } from "react"
import { Coder3 } from "./Coder3"
import { NameContext } from "./CreateContext"

export const Coder2 = () => {

  const coder2=useContext(NameContext)

    return (
      <>
      i am coder2
      <h2>{coder2.name}</h2>
      <h5><Coder3 /></h5>

      </>
    )
  }