import { useHistory } from "react-router-dom";

const About = () => {

  const history = useHistory();
  return (
    <div>
      <h4> Cart Item</h4>
      <button onClick={() => history.push("/")}>Let Navigate</button>
    </div>
  );
};
export default About;
