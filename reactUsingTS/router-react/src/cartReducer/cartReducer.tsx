import Item1 from '../image/item1.jpg'
import Item2 from '../image/item2.jpg'
import Item3 from '../image/item3.jpg'
import Item4 from '../image/item4.jpg'
import Item5 from '../image/item5.jpg'
import Item6 from '../image/item6.jpg'


const initState = {

    items: [
        { id: 1, title: 'Sparx', price: 90.50, img: Item1 },
        { id: 2, title: 'Adidas', price: 140.20, img: Item2 },
        { id: 3, title: "Nike", price: 120, img: Item3 },
        { id: 4, title: 'Black Panthor', price: 160.30, img: Item4 },
        { id: 5, title: 'Sport', price: 110.10, img: Item5 },
        { id: 6, title: 'Puma(White)', price: 100.00, img: Item6 }
    ],
    addedItems:[],
    total: 0
}
const cartReducer = (state = initState, action: any) => {

    return state
}
export default cartReducer;