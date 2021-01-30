import React from "react";

const PenghargaanCard = ({imgSrc, imgAlt, imgWidth, Title, Description}) => {
	return (
		<div className="px-lg-rlv-C mt-rlv-1-mobile mt-lg-rlv-1-desktop text-center">
			<img
				src={imgSrc}
				alt={imgAlt}
				className="mb-rlv-C"
				style={{objectFit: "contain", width: imgWidth}}
			/>
			<h4 className="mb-rlv-B text-gray-5 font-weight-bold">{Title}</h4>
			<p className="text-gray-4 mb-rlv-1-mobile mb-lg-rlv-1-desktop">{Description}</p>
		</div>
	);
};

export default PenghargaanCard;
