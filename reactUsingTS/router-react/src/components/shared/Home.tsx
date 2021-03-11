import React from 'react'
import Item1 from '../../image/item1.jpg'
class Home extends React.Component {

  render() {

    return (
      <div >
        <div className="row">
          <div className="col s7 m7">
            <div className="card">
              <div className="card-image">
                <img src={Item1}/>
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                   I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>      </div>
    );
  }
}
export default Home;
