import React from "react";

const ProductTesmoni = ({imgSrc, imgAlt, reviewer, review}) => {
	return (
		<div className="text-center text-lg-left d-lg-flex d-inline-block px-rlv-C px-lg-rlv-3-desktop rounded-lg">
			<img
				src={imgSrc}
				alt={imgAlt}
				style={{height: "88px"}}
				className="d-lg-inline mx-auto ml-lg-0 mr-lg-rlv-1-desktop mb-rlv-C mb-lg-0"
			/>
			<div className=" d-lg-inline">
				<div className="d-block">
					<p className="d-inline-block h5 text-white mb-0" style={{lineHeight: "34px"}}>
						{review}
					</p>
				</div>
				<br />
				<div className="d-block">
					<p className="d-inline-block h5 text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">{reviewer}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductTesmoni;
