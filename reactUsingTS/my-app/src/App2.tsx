
import React  from 'react'

class App2 extends React.Component{
    myref = React.createRef<HTMLHeadingElement>();
    componentDidMount=() =>{

        console.log(this.myref.current?.innerText);

    }
    
    render(){
        
        return(

            <div>
                <h3  ref={ this.myref}>
               Hello

                </h3>
                </div>
        )
    }

}
export default App2;