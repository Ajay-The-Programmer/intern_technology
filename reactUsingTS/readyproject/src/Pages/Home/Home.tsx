import React, { useEffect, useState } from 'react';
import './Home.css';
import { HomeService } from '../../Services/Home.service';

// import socketIOClient from 'socket.io-client';
// const ENDPOINT = "http://192.168.1.77:3000";

const Home: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        submitData();
    }, [])

  /*   useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", (data:any) => {
          setResponse(data);
        });
        submitPayment();
      }, []); */

    function submitData(){
        HomeService.getData().then((res: any) => {
          if (res) {
                setData(res);
          } else {
              console.log('Result not found');
            } 
        }).catch((error: any) => {
            console.log(error);   
        });
      }

    return (<>
    <div className="sidebar">
        <a className="active" href="/">Home</a>
        <a href="/login">News</a>
        <a href="">Contact</a>
        <a href="">About</a>
    </div>

    <div className="content">
        <h4>Welcome to Home page </h4>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user_data: any, i: number) => 
                    <tr key={`${i}`}>
                        <td>{user_data.id}</td>
                        <td>{user_data.name}</td>
                        <td>{user_data.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    </>)
}

export default Home;

