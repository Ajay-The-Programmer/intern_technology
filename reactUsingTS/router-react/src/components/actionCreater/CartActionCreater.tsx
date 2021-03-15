
export const addToCart = (id: number) => {

    return {
        type: "ADD_TO_CART",
        payload: id
    }
}
export const increasQuantity = (id: number) => {

    return {

        type: "INCREASE_QTY",
        payload: id
    }

}
export const descreaseQuantity = (id: number) => {
    return {
        type: "DECREASE_QTY",
        payload: id
    }
}

export const removeItem = function (id: number) {

    return {
        type: "REMOVE_ITEM",
        payload: id
    }
}


