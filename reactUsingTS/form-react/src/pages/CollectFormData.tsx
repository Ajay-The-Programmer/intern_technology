import React from 'react'
import { Link } from 'react-router-dom';

import { Services } from "../Services/Services"

class CollectFormData extends React.Component{
    
    state :{
        name: string,
        email: string,
        mobile_no: null,
        password: any,
        confirm_password: any,
    };
    constructor(props: any) {
        
        super(props);
        this.state = {
            name: " ",
            email: " ",
            mobile_no: null,
            password: null,
            confirm_password: null,
        };
      


    }
     myChangeHandler = (event: { target: { value: any; name: string } }) => {
       
      
            
        
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    ///////////////////////////////////////////////

    registerData=(event: { preventDefault: () => void; })=>{

        event.preventDefault();
     
       console.log(this.state);

       
       
        Services.postData(this.state).then((res: any) => {
            if (res) {
          
              console.log(res);
      
            } else {
              console.log('Result not found');
            }
          }).catch((error: any) => {
            console.log(error);
          });
        
          console.log("submit Data");
    }

     ///////////////////////////////////////////////


    render() {
        return (

            <>
             <h2 className="update">Create User</h2><br/>
                <form onSubmit={this.registerData}>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" >Name</label>
                        <div className="col-sm-5">
                            <input type="text" required className="form-control" id="inputName3" name="name" placeholder="Name" onChange={this.myChangeHandler} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-5">
                            <input type="email" required className="form-control" id="inputEmail3" name="email" placeholder="Email" onChange={this.myChangeHandler} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Mobile_Number</label>
                        <div className="col-sm-5">
                            <input type="text"required className="form-control" id="inputMobile_Number3" name="mobile_no" placeholder="Mobile_Number" onChange={this.myChangeHandler} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-5">
                            <input type="password" required className="form-control" id="inputPassword3" name="password" placeholder="Password" onChange={this.myChangeHandler} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Confirm_Password</label>
                        <div className="col-sm-5">
                            <input type="password" required className="form-control" id="Confirm_Password3 "  placeholder="Confirm_Password" onChange={this.myChangeHandler} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-5">
                            <button type="submit" className="btn btn-primary" >Sign in</button>
                            <button type="submit" className="btn btn-success" > <Link to="/">Show Data</Link> </button>
                        </div>
                    </div>
                </form>
            </>
        )
    }

}
export default CollectFormData;

