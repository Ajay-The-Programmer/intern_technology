import React from 'react';

const Login: React.FC = () => {

    return (<>
        <div className="row justify-content-md-center">
            <div className="col-md-4">
                <form>
                    <div className="form-group">
                    <label>First Name</label>
                    <input name="firstName" type="text" className="form-control" placeholder="Enter name"  />
                    </div>

                    <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </>);
}

export default Login;

