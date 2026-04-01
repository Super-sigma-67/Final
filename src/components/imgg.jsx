function ImageCard({myImage}) {
  return (
    <>
      <div className="border m-3 p-2">
        <img src={myImage} alt={myImage} className="w-100 mb-3" />
      </div>
    </>
  );
}

export default ImageCard;