import React from 'react'
export const addToCart = (id: number) => {

    return {
        type: "ADD_TO_CART",
        payload: id
    }
}