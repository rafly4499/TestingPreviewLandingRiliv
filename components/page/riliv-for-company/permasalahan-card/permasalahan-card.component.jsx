import React from "react";

const PermasalahanCard = ({imgSrc, imgAlt, Title, Description}) => {
	return (
		<div className="col-12 col-lg-4 mb-rlv-1-mobile mb-lg-rlv-1-desktop">
			<img src={imgSrc} alt={imgAlt} className="container mb-rlv-C" style={{objectFit: "contain"}} />
			<h5 className="mb-rlv-B text-gray-5 font-weight-bold">{Title}</h5>
			<p className="text-gray-4 mb-0">{Description}</p>
		</div>
	);
};

export default PermasalahanCard;
