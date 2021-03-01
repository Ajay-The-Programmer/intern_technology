import { useLocation, useParams, useRouteMatch } from "react-router-dom";

interface Typess {
  object: {};
}

const Profile = (props: any) => {
  const { profile_id }:any= useParams();

  console.log(props);
  return <h4> Your Entered Id is :{profile_id}</h4>;
};
export default Profile;
