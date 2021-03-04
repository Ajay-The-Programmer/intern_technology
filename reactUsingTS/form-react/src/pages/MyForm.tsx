import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../FormData.css"
import { Services } from "../Services/Services"







const MyForm = () => {

  const history=useHistory();
  const [data, setData] = useState([]);
 
  

  useEffect(() => {
    getDataFromApi();
  }, [])


  // For Get Data
  const getDataFromApi = () => {
    Services.getData().then((res: any) => {
      if (res) {
        setData(res)
      
      } else {
        console.log('Result not found');
      }
    }).catch((error: any) => {
      console.log(error);
    });
  };

   

//////////// Delete /////////////////
  
const deletData=(props:number)=>{
  console.log("delete "+props);


}
/////////////////////////////////////


  return (
  <>
   
      <table id="customers">
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile_Number</th>
          <th>CRUD</th>

        </thead>
        <tbody>
          {data.map((item: any) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile_no}</td>
             
              <td><button onClick={()=>history.push('/create')}> <strong>Create</strong> </button>
              <button onClick={()=>{ history.push(`/update/${item.id}`)}}> <strong>Update</strong> </button>
              <button onClick={() => {deletData(item.id)}}> <strong>Delete</strong> </button></td>
             
              
            </tr> )}
       
        </tbody>
      </table>
    </>
  );


}
export default MyForm;



  

 