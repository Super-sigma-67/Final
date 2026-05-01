import { useState } from 'react';


function SampleTask({totalPrice, setTotalPrice}){


// create a stateful variable for each field (start with just one)
// create a stateful variable for the array of locations (notice how it is an empty array with square brackets[])
   const [name, setName] = useState ("");
   const [allSubscriptions, setAllSubscriptions] = useState([]);
   const [price, setPrice] = useState ("");



// use this starter code for the handleSubmit event .
// first you want to make sure the form doesn't do its normal form stuff -- this is what prevent default means
   function handleSubmit (event){
   event.preventDefault();




// then create a variable for the new entry, id.Date.now() ensures a unique id
   const newEntry = {
        id: Date.now(),
        name: name,
        price: price,
   };


// then add that to your array. use the setLocations function, ...locations takes all existing things in the array, then adds your newLocation at the end
// then you want to change the description (the value of the input) back to blank for the next submission
   setAllSubscriptions([...allSubscriptions, newEntry]);
   setName("");
   setPrice("0");
}


// function handleClick(){
// let sum = 0
// const calculatedPrice = allSubscriptions.filter((subscription) =>{
//   sum = sum + parseFloat(subscription.price) || 0
// })
// setTotalPrice(sum);
// }


   return(
       <div>

      
{/* name  */}
       <form className="border" onSubmit={handleSubmit}>
         <input
         className="border"
         type="text"
         value={name}
         placeholder = "Subscription Name"
         onChange={(event) => setName(event.target.value)}
         />
{/* price */}
<input
         className="border"
         type="text"
         value={price}
         placeholder = "Price ($)"
         onChange={(event) => setPrice(event.target.value)}
         
         />

         <button
         className="border"
         type="submit">Submit</button>



         </form>

         {/* <button onClick={handleClick}>calculate!!!!</button>
         <p>Total Price: ${totalPrice}</p> */}

{/* map over the locations to show everything you've submitted */}
       {allSubscriptions.map((subscription)=>(
               <div key={subscription.id}>


                  <p>Subscription Name: {subscription.name}</p>
                  <p>Subscription Price: ${subscription.price}</p>
               </div>
       )
       )}
       </div>
   )

};


export default SampleTask;