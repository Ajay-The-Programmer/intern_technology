import './withPower.css'

//Higher Order Component
const WithPower = (Wcomponent: any) => {
  
  const newcomponent = () => {
    return (
        
      <div className="wpower">
        <Wcomponent name="Ajay"  status="programmer"/>
      </div>
    );
  };
  return newcomponent;
};
export default WithPower;
