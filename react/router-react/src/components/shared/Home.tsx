import React from 'react'

import '../CSS/Home.css'
import { connect } from 'react-redux'
import { addToCart } from '../actionCreater/CartActionCreater';




class Home extends React.Component<any>{

  handleClick = (id: number) => {
    this.props.addToCart(id);


  }
  render() {


    let itemList = this.props.items.map((item: any) => {
      return (


        <div className="col-4" key={item.id}>
          <div className="card" style={{ width: '14rem' }} >
            <img className="card-img-top" src={item.img} alt="Shoes Image" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text"> <strong> ${item.price} </strong></p>
              <a href='#' id="details">DETAILS</a>
              <button className="btn btn-primary" id="add_to_cart" onClick={() => { this.handleClick(item.id) }}>Add to Cart</button>
            </div>
          </div>
        </div>
      )
    }

    );


    return (
      <>
        <h2 className="home_title">SHOP</h2>
        <div className="container" id="Home_component">
          <div className="row" >


            {itemList}
          </div>
        </div>
      </>
    );

  }

}


const mapStateToProps = (state: any) => {


  return {

    items: state.items,
    totalQuantity: state.totalQuantity

  }
}
const mapDispatchToProps = (dispatch: any) => {

  return {
    addToCart: (id: number) => { dispatch(addToCart(id)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
