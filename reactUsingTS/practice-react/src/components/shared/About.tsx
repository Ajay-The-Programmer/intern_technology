const About = (props: any) => {
  
  return(
    <div>
      <h1>I am about page</h1>
      <button onClick={(()=>props.history.push("/"))}>Let Navigate</button>
    </div>
  );
};
export default About;
