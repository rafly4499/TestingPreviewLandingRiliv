import React from "react";

const TrustedByImg = ({photoUrl, photoAlt, imgHeight}) => {
	return (
		<div className="col-6 col-lg-2 px-rlv-A px-lg-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop d-flex ">
			<img
				src={photoUrl}
				alt={photoAlt}
				className="container align-self-center"
				style={{padding: "0", height: imgHeight, objectFit: "contain"}}
			/>
		</div>
	);
};

export default TrustedByImg;
