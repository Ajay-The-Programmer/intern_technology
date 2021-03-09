import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import Recipe from './Recipe'
interface Props {

    removeItem(id: number): any
    addQuantity(id: number): any
    subtractQuantity(id: number): any


    items: any
}
class Cart extends React.Component<Props>{
    //to remove the item completely
    handleRemove = (id: number) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id: number) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id: number) => {
        this.props.subtractQuantity(id);
    }
    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map((item: { id: string | number | null | undefined; img: string | undefined; title: React.ReactNode; desc: React.ReactNode; price: React.ReactNode; quantity: React.ReactNode; }) => {
                    return (

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}>arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <Recipe />
            </div>
        )
    }
}


const mapStateToProps = (state: { addedItems: any; }) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch: (arg0: { type: string; id: number; }) => void) => {
    return {
        removeItem: (id: number) => { dispatch(removeItem(id)) },
        addQuantity: (id: number) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id: number) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)