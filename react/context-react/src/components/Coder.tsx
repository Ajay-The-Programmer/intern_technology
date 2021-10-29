import React, { useContext } from "react"
import { Coder2 } from "./Coder2"
import { NameContext } from "./CreateContext"

export const Coder = () => {
  const coder=useContext(NameContext)
    return (
      <>
      i am coder1
      <h2>{coder.name}</h2>
      <h5><Coder2 /></h5>
      </>
    )
  }