import {  useParams } from "react-router-dom";


const Profile = (props: any) => {
  const { profile_id }:any= useParams();

  console.log(props);
  return <h4> Your Entered Id is :{profile_id}</h4>;
};
export default Profile;
