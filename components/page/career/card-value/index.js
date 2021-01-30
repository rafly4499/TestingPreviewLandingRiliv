import React from "react";

const CardValue = ({ first, imgSrc, desc }) => {
	return (
		<div
			className={`col-12 col-lg-12 text-center ${
				first ? "" : "pt-rlv-1-mobile pt-md-0"
			}`}
			style={{ maxWidth: "350px" }}
		>
			<img
				className="mb-rlv-1-mobile mb-lg-rlv-1-desktop"
				src={`./img-career/${imgSrc}`}
				style={{ height: "220px", width: "220px" }}
			/>
			<p className="h5 text-center">{desc}</p>
		</div>
	);
};
export default CardValue;
