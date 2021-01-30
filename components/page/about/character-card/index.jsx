import React from "react";

const CharacterCard = ({ imgSrc, Name, JobTitle, SubJobTitle }) => {
  return (
      <div className='col-12 col-md-6 px-rlv-A'>
    <div
      className=" shadow-lg py-rlv-2-mobile py-lg-rlv-2-desktop mb-rlv-1-mobile mb-md-0 px-rlv-A"
      style={{ backgroundColor: "#41d5e7", borderRadius: "20px" }}
    >
      <img className="w-100 mb-rlv-B" src={`./img-about/${imgSrc}`} />
      <p className="h3 text-white font-weight-bold text-center mb-rlv-A">
        {Name}
      </p>
      <p className="h5 text-white text-center">
        {JobTitle} & <br />
        {SubJobTitle}
      </p>
    </div>
    </div>
  );
};

export default CharacterCard;