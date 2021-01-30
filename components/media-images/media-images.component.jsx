import React from "react";

const MediaImages = ({photoUrl, photoAlt}) => {
	return (
		<div className="col-6 col-lg-2 px-rlv-A px-lg-rlv-B mb-rlv-A">
			<img src={photoUrl} alt={photoAlt} className="container" style={{padding: "0"}} />
		</div>
	);
};

export default MediaImages;
