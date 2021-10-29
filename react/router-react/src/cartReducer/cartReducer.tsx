
import Item1 from '../image/item1.jpg'
import Item2 from '../image/item2.jpg'
import Item3 from '../image/item3.jpg'
import Item4 from '../image/item4.jpg'
import Item5 from '../image/item5.jpg'
import Item6 from '../image/item6.jpg'
import Item7 from '../image/item7.jpg'
import Item8 from '../image/item8.jpg'
import Item9 from '../image/item9.jpg'


const initState = {

    items: [
        { id: 1, title: 'Sparx', price: 90, img: Item1, quantity: 0 },
        { id: 2, title: 'Adidas', price: 140, img: Item2, quantity: 0 },
        { id: 3, title: "Nike", price: 120, img: Item3, quantity: 0 },
        { id: 4, title: 'Black Panthor', price: 160, img: Item4, quantity: 0 },
        { id: 5, title: 'Sport', price: 110, img: Item5, quantity: 0 },
        { id: 6, title: 'Puma(White)', price: 100, img: Item6, quantity: 0 },
        { id: 7, title: 'Casual', price: 200, img: Item7, quantity: 0 },
        { id: 8, title: 'Formal(Black)', price: 150, img: Item8, quantity: 0 },
        { id: 9, title: 'Sparx Runnig', price: 400, img: Item9, quantity: 0 }

    ],
    addedItems: [],
    total: 0,
    totalQuantity: 0
}
const cartReducer = (state = initState, action: any): any => {

    //INSIDE HOME COMPONENT

    if (action.type === 'ADD_TO_CART') {

        let addedItem: any;
        addedItem = state.items.find(item => item.id === action.payload)
        let existed_item = state.addedItems.find((item: any) => item.id === action.payload)
        if (existed_item) {
            addedItem.quantity += 1;
            state.totalQuantity += 1;
            return {
                ...state,
                total: state.total + addedItem.price

            }
        }
        else {
            addedItem.quantity = 1;
            state.totalQuantity += 1;

            //calculate the total
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }

    }
    if (action.type === 'INCREASE_QTY') {
        let addedItem: any;
        addedItem = state.items.find(item => item.id === action.payload)
        addedItem.quantity += 1;
        state.totalQuantity += 1;

        return {
            ...state,
            total: state.total + addedItem.price
        }

    }

    if (action.type === "DECREASE_QTY") {
        console.log(action.payload);

        let addedItem: any;
        addedItem = state.items.find(item => item.id === action.payload)
        state.totalQuantity -= 1
        if (addedItem.quantity === 1) {
            let new_items: any
            new_items = state.addedItems.filter((item: any) => item.id !== action.payload)
            let new_total = state.total - addedItem.price

            return {
                ...state,
                addedItems: new_items,
                total: new_total
            }

        }

        else {
            addedItem.quantity -= 1;


            return {
                ...state,
                total: state.total - addedItem.price
            }
        }
    }
    if (action.type === "REMOVE_ITEM") {

        let addedItem: any;
        addedItem = state.items.find(item => item.id === action.payload)
        let new_items = state.addedItems.filter((item: any) => item.id !== action.payload)
        let new_total = state.total - (addedItem.quantity * addedItem.price);
        state.totalQuantity = state.totalQuantity - addedItem.quantity;
        return {
            ...state,
            addedItems: new_items,
            total: new_total
        }


    }
    else {
        return state

    }

}
export default cartReducer;