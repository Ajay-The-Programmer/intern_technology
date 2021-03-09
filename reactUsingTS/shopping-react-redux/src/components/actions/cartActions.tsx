import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from './action-types/cart-actions'


export const addToCart = (id: number) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const removeItem = (id: number) => {

    return {
        type: REMOVE_ITEM,
        id
    }
}

//subtract qt action
export const subtractQuantity = (id: number) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id: number) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}
