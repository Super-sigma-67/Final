function ImageCard({myImage}) {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg m-5 p-4 border border-gray-200 max-w-sm mx-auto">
        <img src={myImage} alt={myImage} className="w-full rounded-md mb-3" />
      </div>
    </>
  );
}

export default ImageCard;