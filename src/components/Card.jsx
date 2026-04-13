function Card2({ myTitle, mySubtitle, myBlurb }) {
  return (
    <>
   
      <div className="bg-white shadow-lg rounded-lg m-5 p-6 border border-gray-200">
        <h1 className="text-2xl font-bold mb-2"> {myTitle} </h1>
        <h4 className="text-lg text-gray-600 mb-2"> {mySubtitle} </h4>
        <p className="text-gray-800"> {myBlurb} </p>
      </div>
    </>
  );
}

export default Card2;