import { useHistory } from "react-router-dom";

const About = () => {
  const history=useHistory();
  return(
    <div>
      <h1>I am about page</h1>
      <button onClick={(()=>history.push("/"))}>Let Navigate</button>
    </div>
  );
};
export default About;
