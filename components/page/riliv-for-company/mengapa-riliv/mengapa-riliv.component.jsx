import React from "react";

const MengapaRilivCard = ({imgSrc, imgAlt, Title, Description}) => {
	return (
		<div className="col-12 col-lg-4 px-lg-rlv-C mt-rlv-1-mobile mt-lg-rlv-1-desktop text-center">
			<img
				src={imgSrc}
				alt={imgAlt}
				className="mb-rlv-C"
				style={{objectFit: "contain", width: "100px"}}
			/>
			<h4 className="mb-rlv-B text-gray-5 font-weight-bold">{Title}</h4>
			<p className="text-gray-4 mb-0">{Description}</p>
		</div>
	);
};

export default MengapaRilivCard;
