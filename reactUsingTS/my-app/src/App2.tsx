
import React from 'react'

class App2 extends React.Component {
    myref = React.createRef<HTMLHeadingElement>();
    myInput = React.createRef<HTMLInputElement>();

    // componentDidMount = () => {

    //     // console.log(this.myref.current?.innerText);
    //     console.log(this.myInput.current?.innerText);


    // }
    getValue = () => {
        console.log(this.myInput.current?.value);


    }

    render() {

        return (

            <div>
                <h3 ref={this.myref}>
                    Hello

                </h3>
                <input type="text" ref={this.myInput} />
                <button onClick={() => this.getValue()}>Get Value</button>
            </div>
        )
    }


}
export default App2;