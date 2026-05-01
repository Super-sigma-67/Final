import Card from "../components/Card";
import SampleTask from "../components/tool";

function Helper({ totalPrice, setTotalPrice, allSubscriptions, setAllSubscriptions }) {


  return ( 
  <> 
  <div className = "bg-rose-300">
    <h1>Helper Page</h1> 
    <Card myTitle="Coyos Subscription helper" mySubtitle="Directions:" myBlurb="Type in your subscription, how much money it is a month and then save! Repeat as many times as needed :)" ></Card>
    
    
    <SampleTask totalPrice={totalPrice} setTotalPrice={setTotalPrice} allSubscriptions={allSubscriptions} setAllSubscriptions={setAllSubscriptions} />
  </div>
   
  </>
)
};

export default Helper;
