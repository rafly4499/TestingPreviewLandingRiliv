import React from "react";

const PenghargaanCardAbout = ({
	imgSrc,
	imgAlt,
	imgWidth,
	Title,
	Description,
}) => {
	return (
		<div className="col-12 col-lg-4 text-center" style={{ maxWidth: "270px" }}>
			<img
				src={imgSrc}
				alt={imgAlt}
				className="mb-rlv-B"
				style={{ objectFit: "contain", width: imgWidth }}
			/>
			<h5 className="mb-rlv-B text-gray-5 font-weight-bold">{Title}</h5>
			<p className="text-gray-4 mb-rlv-1-mobile mb-lg-0">{Description}</p>
		</div>
	);
};

export default PenghargaanCardAbout;
