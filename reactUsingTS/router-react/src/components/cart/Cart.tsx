import React from "react";
import { connect } from "react-redux";

import { descreaseQuantity, increasQuantity, removeItem } from "../actionCreater/CartActionCreater";
import '../CSS/Cart.css'


class Cart extends React.Component<any>{
  handle_increase_qty = (id: number) => {
    this.props.increasQuantity(id)
  }
  handle_descrease_qty = (id: number) => {
    this.props.descreaseQuantity(id)
  }
  handle_remove = (id: number) => {
    this.props.removeItem(id);
  }
  render() {
    let total = this.props.total;
    let addedItems = this.props.items.length ?
      (

        this.props.items.map((item: any) => {

          return (

            <div className="container" key={item.id}>
              <div className="row">
                <div className="col-sm">
                  <img src={item.img} alt="" className="cart_img" />
                </div>
                <div className="col-sm">
                  {item.title}
                </div>
                <div className="col-sm">
                  Qty:{item.quantity}
                </div>
                <div className="col-sm">
                  Price: ${item.price}
                </div>
                <div className="col-sm">
                  <button className="add_sub_item" onClick={() => { this.handle_increase_qty(item.id) }}>+</button>
                </div>
                <div className="col-sm">
                  <button className="add_sub_item" onClick={() => { this.handle_descrease_qty(item.id) }}>-</button>
                </div>
                <div className="col-sm">
                  <button id="remove_item" onClick={() => { this.handle_remove(item.id) }}><i className="bi bi-trash-fill" id="trash"></i></button>
                </div>

              </div>
            </div>

          )
        })) : (
        <h4 style={{ color: "gray" }}>Your cart is empty</h4>
      )
    return (
      <>
        <h2 className="cart_title">CART</h2>
        <div className="container" id="cart_container">

          {addedItems}
          <h5 className="total_amount">Total Payment: ${total}</h5>


        </div>
      </>
    )
  }


}
const mapStateToProps = (state: any) => {

  return {
    items: state.addedItems,
    total: state.total
  }
}
const mapDispatchToProps = (dispatch: any) => {

  return {
    increasQuantity: (id: number) => { dispatch(increasQuantity(id)) },
    descreaseQuantity: (id: number) => { dispatch(descreaseQuantity(id)) },
    removeItem: (id: number) => { dispatch(removeItem(id)) }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


