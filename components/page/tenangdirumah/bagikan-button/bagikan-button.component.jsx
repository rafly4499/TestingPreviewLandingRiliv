import React from "react";

const BagikanButton = ({shareUrl, imgSrc, imgAlt, height}) => {
	return (
		<a className=" d-inline-block mr-rlv-B" href={shareUrl} rel="noopener" target="_blank">
			<img src={`./img-tenangdirumah/${imgSrc}`} alt={imgAlt} style={{height: height}} className="" />
		</a>
	);
};

export default BagikanButton;
