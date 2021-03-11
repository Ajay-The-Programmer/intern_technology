import React from 'react'
import Item1 from '../../image/item1.jpg'
import '../CSS/Home.css'
import { connect, useSelector } from 'react-redux'
import { addToCart } from '../actionCreater/CartActionCreater';
// import {initState} from "../../cartReducer/cartReducer"

class Home extends React.Component<any>{
  handleClick(id: any) {
    console.log(id);
    this.props.addToCart(id);

  }
  render() {


    let itemList = this.props.items.map((item: any) => {
      return (

        <div className="card" style={{ width: '14rem' }} key={item.id}>
          <img className="card-img-top" src={item.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text"> <strong> ${item.price} </strong></p>
            <a href='#' id="details">DETAILS</a>
            <a href="#" className="btn btn-primary" id="add_to_cart" onClick={() => { this.handleClick(item.id) }}>Add to Cart</a>
          </div>
        </div>


      )
    });

    return (
      <>

        <div className="container">

          {itemList}

        </div>
      </>
    );
  }

}


const mapStateToProps = (state: any) => {


  return {

    items: state.items

  }
}
const mapDispatchToProps = (dispatch: any) => {

  return {
    addToCart: (id: number) => { dispatch(addToCart(id)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
