function Card2({ myTitle, mySubtitle, myBlurb }) {
  return (
    <>
      <div className="border m-5 p-3">
        <h1 className="border"> {myTitle} </h1>
        <h4> {mySubtitle} </h4>
        <p> {myBlurb} </p>
      </div>
    </>
  );
}

export default Card2;