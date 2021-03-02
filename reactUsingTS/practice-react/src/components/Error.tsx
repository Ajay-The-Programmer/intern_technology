import { stat } from "fs";
import { useEffect } from "react";

const Error = function () {

  
  useEffect(() => {
    return()=>{

      console.log("component unmount");
     
    }
  },[]);
  return (

    <div>
      <h1>404</h1>
      <p>Oops Page Not Found...</p>
    </div>
  );
};
export default Error;
