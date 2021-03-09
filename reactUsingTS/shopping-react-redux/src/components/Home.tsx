import { connect } from "http2"
import React from "react"
import { Link } from "react-router-dom"

interface Props{
    items:any
}
class Home extends React.Component<Props>{


    render(){
        let itemList = this.props.items.map((item:any)=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"><Link to="/">add</Link></i></span>
                        </div>
                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
            )
        })
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state:any)=>{
    return {
      items: state.items
    }
  }

export default connect(mapStateToProps)(Home);