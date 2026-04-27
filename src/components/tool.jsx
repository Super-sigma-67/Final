import { useState } from 'react';


function SampleTask(){


// create a stateful variable for each field (start with just one)
// create a stateful variable for the array of locations (notice how it is an empty array with square brackets[])
   const [name, setName] = useState ("");
   const [allSubscriptions, setAllSubscriptions] = useState([]);




// use this starter code for the handleSubmit event .
// first you want to make sure the form doesn't do its normal form stuff -- this is what prevent default means
   function handleSubmit (event){
   event.preventDefault();




// then create a variable for the new entry, id.Date.now() ensures a unique id
   const newEntry = {
        id: Date.now(),
        name: name
   };


// then add that to your array. use the setLocations function, ...locations takes all existing things in the array, then adds your newLocation at the end
// then you want to change the description (the value of the input) back to blank for the next submission
   setAllSubscriptions([...allSubscriptions, newEntry]);
   setName("");
}


   return(
       <div>
      
{/* for the form, add onSubmit and make it run the function you defined earlier  */}
       <form onSubmit={handleSubmit}>
         <input
         className="border"
         type="text"
         value={name}


// also make sure to add this onChange. since the input is being controlled by react, you need to update the value using the setDescription
         onChange={(event) => setName(event.target.value)}
         />
         <button
         className="border"
         type="submit">Submit</button>


         </form>


{/* map over the locations to show everything you've submitted */}
       {locations.map((location)=>(
               <div key={location.id}>
                       {location.description}
               </div>
       )
       )}
       </div>
   )
};


export default SampleTask;