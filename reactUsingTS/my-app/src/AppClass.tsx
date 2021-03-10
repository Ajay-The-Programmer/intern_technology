
import React from 'react'


class AppClass extends React.Component {
    myInput: React.RefObject<HTMLInputElement>;
   
    constructor(props:any){
        super(props);
        // this.myref = React.createRef<HTMLHeadingElement>();
        this.myInput = React.createRef<HTMLInputElement>();

    }
   

    getValue = () => {
        console.log(this.myInput.current?.value);
        this.myInput.current?.focus();


    }

    render(){

        return (

            <div>
                <h3>
                    Hello
                </h3>
                <input type="text" ref={this.myInput} />
           <button onClick={()=>this.getValue()}>click</button>

            </div>
        )
    }


}
export default AppClass;