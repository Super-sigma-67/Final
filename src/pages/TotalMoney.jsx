import React, { useState } from "react";

import mypicture from "../assets/IMG20260429091403.jpg";
import ImageCard from "../components/imgg";
import Card from "../components/Card";
import SimpleTask from "../components/tool";


     

function TotalMoney({totalPrice, setTotalPrice, allSubscriptions, setAllSubscriptions}){

     function handleClick(){
let sum = 0
const calculatedPrice = allSubscriptions.filter((subscription) =>{
  sum = sum + parseFloat(subscription.price) || 0
})
setTotalPrice(sum);
}


     return(
          <>
          <ImageCard myImage={mypicture}/>
     <Card myTitle="Click the button to see how much you are spending on subscriptions each month!" />
          
<button onClick={handleClick}>calculate!!!!</button>
         <p>Total Price: ${totalPrice}</p>
          </>


     )


}



export default TotalMoney;